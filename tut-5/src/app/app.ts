import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Details } from "./details/details";
import { NgStyle } from '@angular/common';
import { DisplayDetails } from './display-details/display-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Details, NgStyle,DisplayDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-5';
}
