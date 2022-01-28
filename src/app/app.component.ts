import { Component, VERSION } from '@angular/core';
import { httpService } from './service/service.student';
import {Student } from './model/students';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  num:number;
  display: string = 'none';
  isForm: string = 'none';
  students: Student[];
  
  constructor(private http: httpService) {}

  

public getBachelor(num:number){
  if(num==0){
    this.display = 'block';
  }
  
  this.http.getStudents().subscribe(
    data => {
      this.students = data;
    }
    
  )
}

// formulario
showForm(num:number){
  if(num==1){
    this.isForm = 'block';
  }
  
}


}
