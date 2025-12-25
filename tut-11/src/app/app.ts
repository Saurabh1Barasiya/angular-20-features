import { Component, DoCheck } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompA } from "./comp-a/comp-a";
import { CompB } from "./comp-b/comp-b";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompA, CompB],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements DoCheck{
  protected title = 'tut-11';

  ngDoCheck(){
    console.log("ngDoCheck form App component...");
  }
}
