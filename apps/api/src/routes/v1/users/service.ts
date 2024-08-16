import { Inject, Injectable } from '@nestjs/common';
import { CreateUser, UpdateUser, User } from '@abdala/models';
import { DBService } from '../../../lib';
import { MongoClient } from 'mongodb';

@Injectable()
export class UsersService extends DBService<User, CreateUser, UpdateUser> {
  constructor(@Inject('MONGO_CLIENT') mongoClient: MongoClient) {
    super(mongoClient, 'users');
  }
}
