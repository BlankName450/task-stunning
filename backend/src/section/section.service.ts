import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section, SectionDocument } from './section.schema';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

type SectionType = 'Hero' | 'About' | 'Contact';

interface GeneratedSection {
  type: SectionType;
  content: string;
}

@Injectable()
export class SectionService {
  constructor(
    @InjectModel(Section.name) private sectionModel: Model<SectionDocument>,
    private readonly httpService: HttpService,
  ) {}

  async createSection(data: {
    idea: string;
    hero: { title: string, text: string };
    about: { title: string, text: string };
    contact: { title: string, text: string };
    images: string[];
  }): Promise<Section> {
    // Validate before saving
    if (!data.hero.title || !data.hero.text || !data.about.title || !data.about.text || !data.contact.title || !data.contact.text) {
      console.error('Attempted to save section with missing fields:', data);
      throw new Error('Section data missing required fields');
    }
    const created = new this.sectionModel(data);
    return created.save();
  }

  async getSections(): Promise<Section[]> {
    return this.sectionModel.find().sort({ createdAt: -1 }).exec();
  }

  parseSections(rawText: string): { hero: { title: string, text: string }, about: { title: string, text: string }, contact: { title: string, text: string } } {
    const result = {
      hero: { title: '', text: '' },
      about: { title: '', text: '' },
      contact: { title: '', text: '' },
    };
    const sectionNames = ['Hero', 'About', 'Contact'];
    for (const name of sectionNames) {
      // Regex to match section, title, and text
      const regex = new RegExp(`${name}:\\s*Title:\\s*["“]?([^"”\n]+)["”]?\\s*Text:\\s*([\s\S]*?)(?=\n(?:Hero|About|Contact):|$)`, 'i');
      const match = rawText.match(regex);
      if (match) {
        result[name.toLowerCase() as 'hero' | 'about' | 'contact'] = {
          title: match[1].replace(/['"“”]/g, '').trim(),
          text: match[2].replace(/['"“”]/g, '').trim(),
        };
      }
    }
    console.log('Parsed Together.ai output:', result);
    return result;
  }

  async generateTextBlocks(idea: string): Promise<{ brand: string; hero: { title: string, text: string }, about: { title: string, text: string }, contact: { title: string, text: string } }> {
    const togetherApiUrl = 'https://api.together.xyz/v1/chat/completions';
    const togetherApiKey = process.env.TOGETHER_API_KEY;
    // Prompt for brand name and sections
    const prompt = `You are a creative web designer assistant. If the user input is a generic idea (like 'Bakery'), generate a catchy brand name for it. If the user input is already a brand name, use it. Then, write 3 sections for a website: Hero, About, and Contact. For each section, give a title and 2-3 sentences of text. Return the result as JSON in this format: { "brand": "...", "hero": { "title": "...", "text": "..." }, "about": { "title": "...", "text": "..." }, "contact": { "title": "...", "text": "..." } }`;
    const response = await firstValueFrom(
      this.httpService.post(
        togetherApiUrl,
        {
          model: 'mistralai/Mixtral-8x7B-Instruct-v0.1',
          messages: [
            {
              role: 'system',
              content: 'You are a creative web designer assistant.'
            },
            {
              role: 'user',
              content: `Idea: ${idea}\n${prompt}`
            }
          ],
          temperature: 0.7
        },
        {
          headers: {
            Authorization: `Bearer ${togetherApiKey}`,
            'Content-Type': 'application/json'
          }
        }
      )
    );
    const rawText = response.data.choices?.[0]?.message?.content || '';
    console.log('Together.ai raw output:', rawText);
    // Try to extract the first JSON block from the output
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[0]);
        if (parsed.brand && parsed.hero && parsed.about && parsed.contact) {
          return parsed;
        }
      } catch (e) {
        console.error('JSON parse error:', e, 'Extracted JSON:', jsonMatch[0]);
      }
    }
    console.error('AI output was not valid JSON. Raw output:', rawText);
    throw new Error('AI output was not valid JSON. Please try a different idea or rephrase.');
  }

  async fetchUnsplashImages(idea: string, count = 3): Promise<string[]> {
    const unsplashKey = process.env.UNSPLASH_ACCESS_KEY;
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(idea)}&per_page=${count}`;
    const response = await firstValueFrom(
      this.httpService.get(url, {
        headers: { Authorization: `Client-ID ${unsplashKey}` },
      })
    );
    return response.data.results.map((img: any) => img.urls.regular);
  }

  async createSectionFromIdea(idea: string): Promise<Section & { brand: string }> {
    const { brand, hero, about, contact } = await this.generateTextBlocks(idea);
    const images = await this.fetchUnsplashImages(idea, 3);
    const section = await this.createSection({ idea, hero, about, contact, images }) as SectionDocument;
    // Return the brand name along with the section
    return { ...section.toObject(), brand };
  }
}
