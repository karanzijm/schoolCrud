import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Teacher} from "../Teacher/teacher";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class TeacherServiceService {

  private apiServiceUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(`${this.apiServiceUrl}/Teacher/all`)
  }

  public addTeachers(teacher: Teacher): Observable<Teacher>{
    return this.http.post<Teacher>(`${this.apiServiceUrl}/Teacher/add`, teacher);
  }

  public updateTeachers(teacher: Teacher): Observable<Teacher>{
    return this.http.put<Teacher>(`${this.apiServiceUrl}/Teacher/update`, teacher);
  }

  public deleteTeachers(teacherId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/Teacher/delete${teacherId}`);
  }
}
