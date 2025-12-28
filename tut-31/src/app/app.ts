import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-31';

  constructor(private renderer:Renderer2){}
  @ViewChild('heading') heading!:ElementRef;
  @ViewChild("headinngthree") headinngthree!:ElementRef;
  @ViewChild("para") para!:ElementRef;
  @ViewChild("parent") parent!:ElementRef;
  li!:HTMLElement;

  addRedColor(){
    this.renderer.setStyle(this.heading.nativeElement,'color','red');
  }

  addGreenBackGround(){
    this.renderer.setStyle(this.heading.nativeElement,'background','blue')
  }

  addPadding(){
    this.renderer.setStyle(this.heading.nativeElement,'padding','1rem');
  }

  addClass(){
    // this.renderer.addClass(this.headinngthree,"add-backgrond-color-and-radius");

    this.renderer.addClass(this.headinngthree.nativeElement,"add-backgrond-color-and-radius");
  }


  deleteClass(){
    this.renderer.removeClass(this.headinngthree.nativeElement,"add-backgrond-color-and-radius");
  }

  isActive=false;
  toggle(){
    this.isActive = !this.isActive;
    if(this.isActive){
      this.renderer.addClass(this.para.nativeElement,"add-backgrond-color-and-radius");
    }else{
      this.renderer.removeClass(this.para.nativeElement,"add-backgrond-color-and-radius");
    }
  }


  childAddKarDo(){
    this.li = this.renderer.createElement("li");
    let textNode = this.renderer.createText("Hi me append hua hu");
    this.renderer.appendChild(this.li,textNode);
    console.log(this.li);
    this.renderer.appendChild(this.parent.nativeElement,this.li);
  }

  childRemoveKarDo(){
    this.renderer.removeChild(this.parent,this.li);
  }
}
