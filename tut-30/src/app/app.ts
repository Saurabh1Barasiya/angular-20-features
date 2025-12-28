import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Custommove } from './Directive/custommove';
import { Inputdetect } from './Directive/inputdetect';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Custommove,Inputdetect],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-30';
}
