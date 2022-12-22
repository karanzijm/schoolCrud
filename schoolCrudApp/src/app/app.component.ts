import {Component, OnInit} from '@angular/core';
import {Student} from "./Student/student";
import {Teacher} from "./Teacher/teacher";
import {StudentServiceService} from "./services/student-service.service";
import {TeacherServiceService} from "./services/teacher-service.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'School CrudApp';
  public students!: Student[];
  public teachers!: Teacher[];

  constructor(private studentService: StudentServiceService, private teacherService: TeacherServiceService) {}

  ngOnInit(){
    this.getTeachers();
    this.getStudents();
  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

  public getTeachers(): void {
    this.teacherService.getTeachers().subscribe(
      (response:Teacher[]) => {
        this.teachers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )

  }
}
