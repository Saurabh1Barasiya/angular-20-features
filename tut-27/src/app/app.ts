import { LowerCasePipe, UpperCasePipe, NgStyle, DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe, TitleCasePipe, KeyValuePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperCasePipe, LowerCasePipe, NgStyle,DatePipe,CurrencyPipe,DecimalPipe,PercentPipe,JsonPipe,TitleCasePipe,KeyValuePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-27';

  today = new Date();

  user = {
    name:'saurabh',
    lastname:'barasiya',
  }
}
