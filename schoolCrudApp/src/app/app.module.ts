import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TeacherServiceService} from "./services/teacher-service.service";
import {StudentServiceService} from "./services/student-service.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TeacherServiceService, StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
