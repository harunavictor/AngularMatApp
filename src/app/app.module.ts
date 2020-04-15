import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './employees/employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { AppMaterialModule } from './material-module';
import { EmpployeeService } from './shared/empployee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DepartmentService } from './shared/department.service';
import { NotificationService } from './shared/notification.service';




@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [EmpployeeService,DepartmentService,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
