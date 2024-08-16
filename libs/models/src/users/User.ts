import { Entity } from '../core/Entity';

export class User extends Entity {
  username!: string;
  password!: string;
}
