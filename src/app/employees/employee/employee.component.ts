import { Component, OnInit } from '@angular/core';
import { EmpployeeService } from 'src/app/shared/empployee.service';
//import { ReactiveForms} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent{

  constructor(public service:EmpployeeService) { }
 departments =[
   {id:1, value:'dep 1'},
   {id:2, value:'dep 2'},
   {id:3, value:'dep 3'}
 ]
  
 onClick(){
   this.service.form.reset();
   this.service.initializeFormGroup()
 }
}
