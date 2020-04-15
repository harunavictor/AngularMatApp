import { Component, OnInit } from '@angular/core';
import { EmpployeeService } from 'src/app/shared/empployee.service';
import { DepartmentService } from 'src/app/shared/department.service'; 
import { NotificationService } from 'src/app/shared/notification.service';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit{ 

  constructor(public service:EmpployeeService,
   public departmentservice: DepartmentService,
   public notification:NotificationService) { }
  ngOnInit(){
    this.service.getEmployees();
  }
  
 onClear(){
   this.service.form.reset();
   this.service.initializeFormGroup();
  
 }
 onSubmit(){
   if(this.service.form.valid){
     this.service.insertEmployee(this.service.form.value)
     this.service.form.reset();
     this.service.initializeFormGroup();
     this.notification.success(':: Submitted Successfully.')
     
     
   }
 }
}
