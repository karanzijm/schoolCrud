import { TestBed } from '@angular/core/testing';

import { StudentServiceService } from './student-service.service';
import {environment} from "../../environment/environment";

import {Student} from "../Student/student";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {Teacher} from "../Teacher/teacher";

describe('StudentServiceService', () => {
  let service: StudentServiceService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(StudentServiceService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getStudents should return expected data', (done) => {
    const expectedData: Student[] = [
      { id:1, name: 'Karanzi John Mary', surname: 'Karanzi' },
      { id:1, name: 'James Bond', surname: 'Bond' },
    ];

    service.getStudents().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(environment.apiBaseUrl+'/Student/all');

    testRequest.flush(expectedData);
  });

  it('updateStudent should return updated data',() => {

    const updatedStudent: Student = {
    id:1, name: 'Karanxi John Mary', surname: 'Karanxi'
    }

    const mockStudent: Student = {
      id:1, name: 'Karanzi John Mary', surname: 'Karanzi'
    }

    service.updateStudents(mockStudent).subscribe(data => {
      expect(data).toEqual(updatedStudent)
    })

    const testRequest = httpTestingController.expectOne({
      url: `${environment.apiBaseUrl}/Student/update`,
      method: 'PUT'
    })

    testRequest.flush(updatedStudent)

  })

  it('should call addStudent and the API should return the book that was added',() => {

    const student: Student = {
      id:1, name: 'Abnoxious Joe', surname: 'Abnoxious'
    }


    service.addStudents(student).subscribe(data => {
      expect(data).toEqual(student)
    })

    const testRequest = httpTestingController.expectOne({
      url: `${environment.apiBaseUrl}/Student/add`,
      method: 'POST'
    })

    testRequest.flush(student)

  })


});
