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

  currentMessage!:string;
  constructor(private myService:MessageServices){
    this.myService.myMesssage$.subscribe({
      next:(res)=>{
        this.currentMessage = res;
      }
    })
  }

  updateMessage(){
    this.myService.setMessage("Message from Component A");
  }

}
