import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import type { Teacher } from './interfaces/teacher.interface';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Get()
  getTeacher(): Teacher[] {
    return this.teacherService.getTeacher();
  }
  @Post()
  addTeacher(@Body() createTeacherDto: CreateTeacherDto): Teacher {
    return this.teacherService.addTeacher(createTeacherDto);
  }
}
