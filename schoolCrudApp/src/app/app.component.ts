import {Component, OnInit} from '@angular/core';
import {Student} from "./Student/student";
import {Teacher} from "./Teacher/teacher";
import {StudentServiceService} from "./services/student-service.service";
import {TeacherServiceService} from "./services/teacher-service.service";
import {HttpErrorResponse} from "@angular/common/http";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'schoolCrudApp';
  public students!: Student[];
  public studentCount!: number;
  public editStudent!: Student;
  public deleteStudent!: Student;
  displayAddStudentModal = "none"
  displayEditStudentModal = "none"
  displayDeleteStudentModal = "none"

  public teachers!: Teacher[];
  public editTeacher!: Teacher;
  public deleteTeacher!: Teacher;
  public teacherCount!: number;
  displayAddTeacherModal = "none"
  displayEditTeacherModal = "none"
  displayDeleteTeacherModal = "none"

  constructor(private studentService: StudentServiceService, private teacherService: TeacherServiceService) {}

  ngOnInit(){
    this.getTeachers();
    this.getStudents();
  }

  openAddStudentPopup(){
  this.displayAddStudentModal = "block"
  }
  closeAddStudentPopup(){
    this.displayAddStudentModal = "none"
  }

  openAddTeacherPopup(){
    this.displayAddTeacherModal = "block"
  }
  closeAddTeacherPopup(){
    this.displayAddTeacherModal = "none"
  }

  openEditStudentPopup(){
    this.displayEditStudentModal = "block"
  }
  closeEditStudentPopup(){
    this.displayEditStudentModal = "none"
  }

  openEditTeacherPopup(){
    this.displayEditTeacherModal = "block"
  }
  closeEditTeacherPopup(){
    this.displayEditTeacherModal = "none"
  }

  openDeleteStudentPopup(){
    this.displayDeleteStudentModal = "block"
  }
  closeDeleteStudentPopup(){
    this.displayDeleteStudentModal = "none"
  }

  openDeleteTeacherPopup(){
    this.displayDeleteTeacherModal = "block"
  }
  closeDeleteTeacherPopup(){
    this.displayDeleteTeacherModal = "none"
  }
  public getStudents(): void {
    this.studentService.getStudents().subscribe({
      next: (response: Student[]) => {
        this.students = response;
        this.studentCount = response.length;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message)
      }
    });
  }

  public getTeachers(): void {
    this.teacherService.getTeachers().subscribe({
      next: (response: Teacher[]) => {
        this.teachers = response;
        this.teacherCount = response.length;
      },
    error: (error
  :
    HttpErrorResponse
  ) =>
    {
      alert(error.message)
    }
  })

  }
  public onAddStudent(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById("add-student-form").click();
    this.studentService.addStudents(addForm.value).subscribe({
      next: (response: Student) => {
        console.log(response);
        this.getStudents();
        addForm.reset();
      },
    error: (error
  :
    HttpErrorResponse
  ) =>
    {
      alert(error.message);
      addForm.reset();
    }
  });
  }

  public onAddTeacher(addTeacherForm: NgForm): void {
    // @ts-ignore
    document.getElementById("add-teacher-form").click();
    this.teacherService.addTeachers(addTeacherForm.value).subscribe({
      next: (response: Teacher) => {
        console.log(response);
        this.getTeachers();
        addTeacherForm.reset();
      },
      error: (error
                :
                HttpErrorResponse
      ) =>
      {
        alert(error.message);
        addTeacherForm.reset();
      }
    });
  }

  public onUpdateStudent(student: Student): void {
    this.studentService.updateStudents(student).subscribe({
      next: (response: Student) => {
        console.log(response);
        this.getStudents();
        this.closeEditStudentPopup();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onUpdateTeacher(teacher: Teacher): void {
    this.teacherService.updateTeachers(teacher).subscribe({
      next: (response: Teacher) => {
        console.log(response);
        this.getTeachers();
        this.closeEditTeacherPopup();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onDeleteStudent(employeeId: number): void {
    this.studentService.deleteStudents(employeeId).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getStudents();
        this.closeDeleteStudentPopup();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onDeleteTeacher(teacherId: number): void {
    this.teacherService.deleteTeachers(teacherId).subscribe({
      next: (response: void) => {
        console.log(response);
        this.getTeachers();
        this.closeDeleteTeacherPopup();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onOpenStudentModal(student: Student, mode: string): void {

    if (mode === 'edit') {
      this.editStudent = student;
      this.openEditStudentPopup();
    }
    if (mode === 'delete') {
      this.deleteStudent = student;
      this.openDeleteStudentPopup();
    }

  }

  public onOpenTeacherModal(teacher: Teacher, mode: string): void {

    if (mode === 'edit') {
      this.editTeacher = teacher;
      this.openEditTeacherPopup();
    }
    if (mode === 'delete') {
      this.deleteTeacher = teacher;
      this.openDeleteTeacherPopup();
    }

  }
}
