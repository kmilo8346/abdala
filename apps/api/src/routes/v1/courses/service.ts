import { Course, CreateCourse, UpdateCourse } from '@abdala/models';
import { Inject, Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { DBService } from '../../../lib';

@Injectable()
export class CoursesService extends DBService<
  Course,
  CreateCourse,
  UpdateCourse
> {
  constructor(@Inject('MONGO_CLIENT') mongoClient: MongoClient) {
    super(mongoClient, 'courses');
  }
}
