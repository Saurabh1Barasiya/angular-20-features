import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Shose } from "./shose/shose";
import { CompB } from "./comp-b/comp-b";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Shose, CompB],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-15';

  num : number = 0;

  inc(){
    this.num = this.num+1;
  }
}
