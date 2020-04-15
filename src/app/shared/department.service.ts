import { Injectable } from '@angular/core';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database'



@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
 departmentlist:AngularFireList<any>;
 array=[];
  constructor(private fire:AngularFireDatabase) {
    this.departmentlist=this.fire.list('departments');
    this.departmentlist.snapshotChanges().subscribe(list=>{
      this.array=list.map(item=>{
        return{
             $key:item.key,
          ... item.payload.val()
        }
      })
    })
   }
}
