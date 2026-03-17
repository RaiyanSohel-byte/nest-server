import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateTeacherDto {
  @IsString()
  name: string;
  @IsInt()
  @Type(() => Number)
  age: number;
  @IsBoolean()
  @Type(() => Boolean)
  isFaculty: boolean;
}
