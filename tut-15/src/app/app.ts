import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Shose } from "./shose/shose";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Shose],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-15';
}
