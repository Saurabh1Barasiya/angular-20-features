import { Component } from '@angular/core';
import { MessageServices } from '../Services/message-services';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-comp-c',
  imports: [NgStyle],
  templateUrl: './comp-c.html',
  styleUrl: './comp-c.css',
})
export class CompC {
  constructor(public myservice:MessageServices){}

  updateMessage(){
    this.myservice.message.set("Message from component C");
  }
}
