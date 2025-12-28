import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Changecolor } from './Directive/changecolor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Changecolor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-29';
}
