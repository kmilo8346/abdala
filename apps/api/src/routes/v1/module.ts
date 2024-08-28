import { Module } from '@nestjs/common';

import { AuthModule } from './auth/module';
import { UsersModule } from './users/module';
import { CoursesModule } from './courses/module';

@Module({
  imports: [AuthModule, UsersModule, CoursesModule],
  controllers: [],
  providers: [],
})
export class V1Module {}
