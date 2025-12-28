import { Component } from '@angular/core';
import { MessageServices } from '../Services/message-services';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-comp-b',
  imports: [NgStyle],
  templateUrl: './comp-b.html',
  styleUrl: './comp-b.css',
})
export class CompB {
  constructor(public myservice:MessageServices){}

  updateMessage(){
    this.myservice.message.set("Message from component B");
  }
}
