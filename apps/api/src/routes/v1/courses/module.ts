import { Module } from '@nestjs/common';

import { CoursesController } from './controller';
import { CoursesService } from './service';

@Module({
  imports: [],
  controllers: [CoursesController],
  providers: [CoursesService],
  exports: [CoursesService],
})
export class CoursesModule {}
