import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private s:CourseService){}
  @Get() getAll(){ return this.s.getAllCourses() }
  @Get(':id') getOne(@Param('id') id:string){ return this.s.getCourseById(id) }
  @Post() create(@Body() dto:any){ return this.s.createCourse(dto) }
}
