import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Userservices } from './Services/userservices';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-41';

  constructor(private us:Userservices){}



  getData(){
    this.us.getUsers().subscribe({
      next:(res)=>{
        console.log(res.body);
      }
    })
  }
}
