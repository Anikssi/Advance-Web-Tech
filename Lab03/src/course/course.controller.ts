import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';
@Controller('course')
export class CourseController{
 constructor(private s:CourseService){}
 @Get() get(){return this.s.getAllCourses()}
}