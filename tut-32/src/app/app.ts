import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-32';

  constructor(private renderer:Renderer2){}
  @ViewChild('parent') parent!:ElementRef;

  paragraphs:HTMLElement[]=[];

  index = 0;

  addItem(){
   
    const p = this.renderer.createElement('p');
    const textNode = this.renderer.createText(`hi how are you ${this.index}`);
    this.index++;
    this.renderer.appendChild(p,textNode);
    this.paragraphs.push(p);
    console.log(p)
    this.renderer.appendChild(this.parent.nativeElement,p);
    console.log(this.paragraphs);
  }

  removeItem(){
    if(this.paragraphs.length >= 0 ){
      const lastIndex = this.paragraphs.length - 1;
      const lastElement = this.paragraphs[lastIndex]
      this.renderer.removeChild(this.parent.nativeElement,lastElement);
      this.paragraphs.pop();
      // this.index--;
    }
  }
}
