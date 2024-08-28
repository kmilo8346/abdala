import { Inject, Injectable } from '@nestjs/common';
import { CreateUser, UpdateUser, User } from '@abdala/models';
import { DBService } from '../../../lib';
import { MongoClient } from 'mongodb';
import { CoursesService } from '../courses/service';

@Injectable()
export class UsersService extends DBService<User, CreateUser, UpdateUser> {
  constructor(
    @Inject('MONGO_CLIENT') mongoClient: MongoClient,
    private readonly coursesService: CoursesService
  ) {
    super(mongoClient, 'users');
  }

  async getCreations(userId: string) {
    // Busco los cursos donde el creador sea el usuario
    const response = await this.coursesService.getAll({
      from: 0,
      size: 20,
      filter: { creator: userId },
    });
    return response.data;
  }

  async getSubscriptions(userId: string) {
    // Busco el usuario para saber las subscripciones (ids de cursos)
    const user = await this.getById(userId);
    // Luego busco los cursos con esos ids
    if (!user.subscriptions) {
      return [];
    }

    const response = await this.coursesService.getAll({
      from: 0,
      size: 20,
      filter: {
        _id: { $in: user.subscriptions },
      },
    });
    return response.data;
  }
}
