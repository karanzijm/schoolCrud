import { TestBed } from '@angular/core/testing';

import { TeacherServiceService } from './teacher-service.service';
import {Teacher} from "../Teacher/teacher";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {environment} from "../../environment/environment";
import {Student} from "../Student/student";

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

  it('updateTeacher should return updated data',() => {

    const updatedTeacher: Teacher = {
      id:1, name: 'Harrison Ford', studentList: 'Karanzi John Mary, Charles Dickens, Headboy'
    }

    const mockTeacher: Teacher = {
      id:1, name: 'Harrison Ford', studentList: 'Karanzi John Mary, Charles Dickens'
    }

    service.updateTeachers(mockTeacher).subscribe(data => {
      expect(data).toEqual(updatedTeacher)
    })

    const testRequest = httpTestingController.expectOne({
      url: `${environment.apiBaseUrl}/Teacher/update`,
      method: 'PUT'
    })

    testRequest.flush(updatedTeacher)

  })


  it('should call addStudent and the API should return the book that was added',() => {

    const teacher: Teacher = {
      id:1, name: 'Sherlock', studentList: 'jones, johnson'
    }


    service.addTeachers(teacher).subscribe(data => {
      expect(data).toEqual(teacher)
    })

    const testRequest = httpTestingController.expectOne({
      url: `${environment.apiBaseUrl}/Teacher/add`,
      method: 'POST'
    })

    testRequest.flush(teacher)

  })


});
