import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from "./child/child";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit,AfterViewChecked{
  protected title = 'tut-16';

  @ViewChild('para') para!:ElementRef;

  @ViewChild('inp') inp!:ElementRef;

  @ViewChild('c1') child!:Child;

  ngAfterViewInit(): void {
    (this.para.nativeElement as HTMLParagraphElement).style.color = 'red';
    (this.inp.nativeElement as HTMLInputElement).focus();
    console.log((this.inp.nativeElement as HTMLInputElement).value);

    this.child.greet();
  }

  ngAfterViewChecked(): void {
    console.log("i am working")
    console.log((this.inp.nativeElement as HTMLInputElement).value) ;
  }

  callChilclassMethod(){
    this.child.greet();
  }

  
}
