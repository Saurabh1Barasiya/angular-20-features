import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-1';

  isLoggedIN:boolean = true;

  toggle(){
    this.isLoggedIN = !this.isLoggedIN;
  }

  age!:number;

  fruit!:string;

  setFruit(value:string){
    this.fruit = value;
  }
  
}
