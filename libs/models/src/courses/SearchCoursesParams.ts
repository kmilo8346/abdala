import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { SearchParams } from '../core';

class Filter {}

export class SearchCoursesParams extends SearchParams {
  @IsOptional()
  @ValidateNested()
  @Type(() => Filter)
  override filter?: Filter;
}
