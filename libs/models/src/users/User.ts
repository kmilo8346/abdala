import { Entity } from '../core/Entity';

export class User extends Entity {
  name!: string;
  username!: string;
  password!: string;
}
