import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageServices {
  private message = new BehaviorSubject<string>("hi");

  myMesssage$ = this.message.asObservable();

  setMessage(data:string){
    this.message.next(data);
  }
}
