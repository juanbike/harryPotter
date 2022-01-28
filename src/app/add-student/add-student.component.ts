import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent  {

 //Valdaciones
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    patronus: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    age: new FormControl('', [Validators.email, Validators.required]),
     
  });

  //gets

  get firstname() {
    return this.contactForm.get('name');
  }

  get lastname() {
    return this.contactForm.get('patronus');
  }

  get email() {
    return this.contactForm.get('age');
  }
  
  onSubmit() {
    console.log(this.contactForm.value);
  }

}//f-class