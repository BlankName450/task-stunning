import { Controller, Post, Body, Get } from '@nestjs/common';
import { SectionService } from './section.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller('section')
export class SectionController {
  constructor(
    private readonly sectionService: SectionService,
    private readonly httpService: HttpService,
  ) {}

  @Post()
  async generateSection(@Body('idea') idea: string) {
    return this.sectionService.createSectionFromIdea(idea);
  }

  @Get()
  async getSections() {
    return this.sectionService.getSections();
  }
}
