import { TestBed } from '@angular/core/testing';

import { TeacherServiceService } from './teacher-service.service';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
