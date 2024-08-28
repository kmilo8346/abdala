import { Module } from '@nestjs/common';

import { UsersController } from './controller';
import { UsersService } from './service';
import { CoursesModule } from '../courses/module';
import { CoursesService } from '../courses/service';

@Module({
  imports: [CoursesModule],
  controllers: [UsersController],
  providers: [UsersService, CoursesService],
})
export class UsersModule {}
