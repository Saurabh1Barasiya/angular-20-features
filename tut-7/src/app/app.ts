import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prouct } from './prouct/prouct';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Prouct],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-7';
}
