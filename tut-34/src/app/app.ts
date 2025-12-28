import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageServices } from './Services/message-services';
import { CompA } from "./comp-a/comp-a";
import { CompB } from "./comp-b/comp-b";
import { CompC } from "./comp-c/comp-c";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompA, CompB, CompC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-34';

  newText!:string;
  constructor(private myservice:MessageServices){
    this.myservice.myMesssage$.subscribe({
      next:(data)=>{
        this.newText = data;
      }
    })
  }

  setData(){
    this.myservice.setMessage("ha me theek hu");
  }
}
