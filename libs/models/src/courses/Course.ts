import { Entity } from '../core/Entity';

export class Course extends Entity {
  creator!: string;
  name!: string;
  description!: string;
  image!: string;
}
