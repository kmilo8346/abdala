import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import bcrypt from 'bcrypt';
import { CreateUser, SearchUsersParams, UpdateUser } from '@abdala/models';
import { UsersService } from './service';
import { Public } from '../../../lib';

@Controller('/v1/users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.service.getById(id);
  }

  @Get('/')
  getAll(@Query() searchParams: SearchUsersParams) {
    return this.service.getAll(searchParams);
  }

  @Public()
  @Post('/')
  async create(@Body() createUser: CreateUser) {
    // Actualiza el password convertido en hash
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(createUser.password, salt);
    createUser.password = password;

    return this.service.create(createUser);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() updateUser: UpdateUser) {
    // Actualiza el password convertido en hash si está presente
    if (updateUser.password) {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(updateUser.password, salt);
      updateUser.password = password;
    }

    return this.service.update(id, updateUser);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }

  @Get('/:id/creations')
  getCreations(@Param('id') id: string) {
    return this.service.getCreations(id);
  }

  @Get('/:id/subscriptions')
  getSubscriptions(@Param('id') id: string) {
    return this.service.getSubscriptions(id);
  }
}
