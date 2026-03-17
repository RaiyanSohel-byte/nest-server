import { Injectable } from '@nestjs/common';
import { Teacher } from './interfaces/teacher.interface';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeacherService {
  private teachers: Teacher[] = [];
  getTeacher(): Teacher[] {
    return this.teachers;
  }
  addTeacher(createTeacherDto: CreateTeacherDto): Teacher {
    const newTeacher: Teacher = {
      id: Date.now(),
      ...createTeacherDto,
    };
    this.teachers.push(newTeacher);
    return newTeacher;
  }
}
