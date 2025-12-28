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

  currentMessage!:string;
  constructor(private myservice:MessageServices){
    this.myservice.myMesssage$.subscribe({
      next:(res)=>{
        this.currentMessage = res;
      }
    })
  }

  updateMessage(){
    this.myservice.setMessage("message from component B");
  }
}
