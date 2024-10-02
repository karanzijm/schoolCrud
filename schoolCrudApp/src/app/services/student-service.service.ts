import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../Student/student";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private apiServiceUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]>{
    console.log(this.apiServiceUrl, ' -------- url ----------')
    return this.http.get<Student[]>(`${this.apiServiceUrl}/Student/all`)
  }

  public addStudents(student: Student): Observable<Student>{
    return this.http.post<Student>(`${this.apiServiceUrl}/Student/add`, student);
  }

  public updateStudents(student: Student): Observable<Student>{
    return this.http.put<Student>(`${this.apiServiceUrl}/Student/update`, student);
  }

  public deleteStudents(studentId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/Student/delete/${studentId}`);
  }
}
