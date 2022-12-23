import { TestBed } from '@angular/core/testing';

import { TeacherServiceService } from './teacher-service.service';
import {Teacher} from "../Teacher/teacher";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {Student} from "../Student/student";
import {environment} from "../../environment/environment";

describe('TeacherServiceService', () => {
  let service: TeacherServiceService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(TeacherServiceService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getStudents should return expected data', (done) => {
    const expectedData: Teacher[] = [
      { id:1, name: 'Harrison Ford', studentList: 'Karanzi John Mary, Charles Dickens' },
      { id:1, name: 'Jack Sparrow', studentList: 'Black beard, kracken' },
    ];

    service.getTeachers().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(environment.apiBaseUrl+'/Teacher/all');

    testRequest.flush(expectedData);
  });
});
