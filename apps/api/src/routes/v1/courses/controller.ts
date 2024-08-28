import {
  CreateCourse,
  SearchCoursesParams,
  UpdateCourse,
} from '@abdala/models';
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
import { Public } from '../../../lib';
import { CoursesService } from './service';

@Controller('/v1/courses')
export class CoursesController {
  constructor(private readonly service: CoursesService) {}

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.service.getById(id);
  }

  @Get('/')
  getAll(@Query() searchParams: SearchCoursesParams) {
    return this.service.getAll(searchParams);
  }

  @Post('/')
  async create(@Body() createCourse: CreateCourse) {
    return this.service.create(createCourse);
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() updateCourse: UpdateCourse) {
    return this.service.update(id, updateCourse);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
