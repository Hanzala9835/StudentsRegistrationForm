import { Component } from '@angular/core';
import {FormBuilder, FormControl,FormGroup,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentsRegistrationForm';
  registrationForm:FormGroup;
  firstname: string="";
  middlename: string="";
  lastname: string="";
  course:string="";
  gender: string="";
  phone: string="";
  currentaddress: string="";
  email: string="";
  password: string="";
  repassword: string="";

  constructor(private frmbuilder:FormBuilder){
    this.registrationForm=frmbuilder.group({
    firstname: new FormControl(''),
    middlename: new FormControl(''),
    lastname: new FormControl(''),
    course:new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl(''),
    currentaddress: new FormControl(''),
    email: ['hanzala@abc.com',[Validators.required]],
    password: ['',[Validators.required]],
    repassword: ['',[Validators.required]]

  });
  }
  
  OnSubmit()
  {
    console.warn(this.registrationForm.value)
    
  }
}
