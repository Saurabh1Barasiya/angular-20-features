import { Component } from '@angular/core';
import { MessageServices } from '../Services/message-services';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-comp-a',
  imports: [NgStyle],
  templateUrl: './comp-a.html',
  styleUrl: './comp-a.css',
})
export class CompA {

  constructor(public myservice:MessageServices){}

  updateMessage(){
    this.myservice.message.set("message from component A");
  }
}
