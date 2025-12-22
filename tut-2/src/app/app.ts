import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-2';

  users = [
    { id: 1, name: 'Saurabh', role: 'Admin' },
    { id: 2, name: 'Rahul', role: 'User' },
    { id: 3, name: 'amit', role: 'User' },
    { id: 4, name: 'peeyush', role: 'User' },
    { id: 5, name: 'suhani', role: 'User' },
    { id: 6, name: 'sohan', role: 'User' },
    { id: 7, name: 'poja', role: 'User' },
  ];

}
