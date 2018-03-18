import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector :'emp-count',
  templateUrl : './employeeCount.html',
  // styleUrls:['./employeeCount.css']

})

export class EmployeeCountComponent{
  @Input()
  All :number;
  @Input()
  Male :number ;
  @Input()
  FeMale :number;

  radioButtonValue:string ='All';

  @Output()
  radioButtonValueChange : EventEmitter<string>=new EventEmitter<string>();

  raiseMethod(){
    this.radioButtonValueChange.emit(this.radioButtonValue);
  }
}
