 import { Injectable } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'

import{AngularFireDatabase,AngularFireList} from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class EmpployeeService {
 employeelist:AngularFireList<any>;

  constructor(private fire:AngularFireDatabase) { }
  initializeFormGroup(){
  }
  form: FormGroup= new FormGroup({
    $key:new FormControl(null),
    fullName:new FormControl('Victor',Validators.required),
    email:new FormControl('dewinner@232.com',Validators.email),
    mobile:new FormControl('',[Validators.required,Validators.minLength(8)]),
    city:new FormControl(''),
    gender:new FormControl('1'),
    department:new FormControl(''),
    hireDate:new FormControl(''),
    isPermanent:new FormControl(''),
  })
  
  getEmployees(){
 this.employeelist=this.fire.list('employees')
 return this.employeelist.snapshotChanges()
  }

  insertEmployee(employee){
    this.employeelist.push({
      fullName:employee.fullName,
      email:employee.email,
      mobile:employee.mobile,
      city:employee.city,
      gender:employee.gender,
      department:employee.department,
      hireDate:employee.hireDate,
      isPermanent:employee.isPermanent
    })
  }
  updateEmployee(employee){
    this.employeelist.update(employee.$key,{
      fullName:employee.fullName,
      email:employee.email,
      mobile:employee.mobile,
      city:employee.city,
      gender:employee.gender,
      department:employee.department,
      hireDate:employee.hireDate,
      isPermanent:employee.isPermanent
    }); 
  }
  deleteEmployee($key:string){
    this.employeelist.remove($key)
  }
}
