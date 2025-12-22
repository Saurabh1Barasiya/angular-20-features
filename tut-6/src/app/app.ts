import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from "./product/product";
import { NgStyle } from '@angular/common';
import { Recomandation } from './recomandation/recomandation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Product,NgStyle,Recomandation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-6';
}
