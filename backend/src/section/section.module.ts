import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Section, SectionSchema } from './section.schema';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { HttpModule } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Section.name, schema: SectionSchema }]),
    HttpModule,
  ],
  controllers: [SectionController],
  providers: [SectionService],
  exports: [SectionService],
})
export class SectionModule {}
