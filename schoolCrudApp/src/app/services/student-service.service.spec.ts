import { TestBed } from '@angular/core/testing';

import { StudentServiceService } from './student-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {environment} from "../../environment/environment";

import {Student} from "../Student/student";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
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
});
