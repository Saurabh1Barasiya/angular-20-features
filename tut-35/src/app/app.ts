import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompA } from "./comp-a/comp-a";
import { CompC } from "./comp-c/comp-c";
import { CompB } from "./comp-b/comp-b";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompA, CompC, CompB],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-35';
}
