import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildA } from "./child-a/child-a";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildA],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-12';

  user = {
    name:"saurabh barasiya",
    age : 28
  }

  increaseAge(){
    this.user.age = this.user.age + 1;
  }
}
