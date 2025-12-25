import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { User } from './Model/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-9';

  parentData: User = {
    name: "saurabh",
    address: "harrai",
    age: 25
  }

  childUser!:User;

  recivedUser(user:User){
    this.childUser = user;
  }

  childMessage!:string;
  recivedMessage(value:string){
    this.childMessage = value;
  }

  
}
