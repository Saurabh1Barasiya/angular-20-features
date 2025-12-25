import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { User } from '../Model/user.model';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges {

  @Input() childUser!: User;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  // @Output() message = new EventEmitter<string>(); 

  @Output() newUser = new EventEmitter<User>();

  // sendToParent(){
  //   this.message.emit("i am comming from Child component");
  // }

  sendUserToParent() {
    this.newUser.emit({
      name: "peeyush",
      address: "madhya pradesh",
      age: 27
    })
  }
}
