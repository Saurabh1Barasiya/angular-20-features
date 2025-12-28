import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageServices {
  message = signal<string>('Inital Message');
}
