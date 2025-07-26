import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SectionDocument = Section & Document;

class SectionBlock {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  text: string;
}

@Schema({ timestamps: { createdAt: true, updatedAt: false } })
export class Section {
  @Prop({ required: true })
  idea: string;

  @Prop({ type: SectionBlock, required: true })
  hero: SectionBlock;

  @Prop({ type: SectionBlock, required: true })
  about: SectionBlock;

  @Prop({ type: SectionBlock, required: true })
  contact: SectionBlock;

  @Prop({ type: [String], required: true })
  images: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const SectionSchema = SchemaFactory.createForClass(Section); 