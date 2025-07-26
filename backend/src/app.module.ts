import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionModule } from './section/section.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI || (() => { throw new Error('MONGODB_URI is not set'); })()
    ),
    SectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
