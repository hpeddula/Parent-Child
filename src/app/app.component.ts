import { Component,OnInit } from '@angular/core';
import { NgModel }  from '@angular/forms';
// import { Apollo } from 'apollo-angular';
// import gql from 'graphql-tag';
// import {Employee,Query} from './types'
// import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   employees:Observable<Employee[]>;
//   constructor(private apollo : Apollo){}
//   ngOnInit(){
//   this.employees = this.apollo.watchQuery<Query>({
//   query: gql`
//     query EmployeeQuery {
//       Employee {
//         id
//         name
//       }
//     }
//   `,
// }).valueChanges
//       .pipe(
//         map(result => result.data.employees)
//       );
// }
employee:any[];
constructor() {
        this.employee = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '6/25/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '10/14/1980'
            },
            {
                code: 'emp105', name: 'Nancy', gender: 'Female',
                annualSalary: 6700.826, dateOfBirth: '12/15/1982'
            },
        ];
    }
getAllCount():number{
  return this.employee.length;

}
getMaleCount():number{
  return this.employee.filter(e=>e.gender==='Male').length;

}
getFeMaleCount():number{
  return this.employee.filter(e=>e.gender==='Female').length;

}

}
