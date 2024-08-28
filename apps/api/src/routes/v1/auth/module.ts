import { Module } from '@nestjs/common';

import { AuthController } from './controller';
import { AuthService } from './service';
import { UsersModule } from '../users/module';
import { UsersService } from '../users/service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CoursesService } from '../courses/service';

@Module({
  imports: [UsersModule, ConfigModule],
  controllers: [AuthController],
  providers: [AuthService, UsersService, CoursesService, ConfigService],
})
export class AuthModule {}
