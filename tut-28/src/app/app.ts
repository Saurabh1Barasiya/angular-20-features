import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomcaptialPipe } from './Pipes/customcaptial-pipe';
import { CroptextPipe } from './Pipes/croptext-pipe';
import { CustomstatusPipe } from './Pipes/customstatus-pipe';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomcaptialPipe, CroptextPipe, CustomstatusPipe, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-28';

  users = [
    {
      name:"saurabh",
      email:"saurabh@gmail.com",
      status:true
    },
    {
      name:"peeyush",
      email:"peeyush@gmail.com",
      status:true
    },
    {
      name:"hero",
      email:"hero@gmail.com",
      status:false
    },
  ]
}
