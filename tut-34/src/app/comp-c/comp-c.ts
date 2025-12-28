import { Component } from '@angular/core';
import { MessageServices } from '../Services/message-services';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-comp-c',
  imports: [NgStyle],
  templateUrl: './comp-c.html',
  styleUrl: './comp-c.css',
})
export class CompC {
  currentMessage!: string;
  constructor(private myService: MessageServices) {
    this.myService.myMesssage$.subscribe({
      next: (res) => {
        this.currentMessage = res;
      }
    })
  }

  updateMessage() {
    this.myService.setMessage("Message from Component C");
  }
}
