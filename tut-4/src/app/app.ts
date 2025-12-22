import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowComments } from "./show-comments/show-comments";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShowComments],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-4';
}
