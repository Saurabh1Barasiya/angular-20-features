import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customdirective } from './Directive/customdirective';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Customdirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-33';
}
