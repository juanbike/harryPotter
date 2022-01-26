import { Component, VERSION } from '@angular/core';
import { httpService } from './service/service.student';
import {Student } from './model/students';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
 

  students: Student[];
  
  constructor(private http: httpService) {}

  

public getBachelor(){
  this.http.getStudents().subscribe(
    data => {
      this.students = data;
    }
    
  )
}
}
