import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputdetect]'
})
export class Inputdetect {

  constructor() { }
  
  @HostListener("input",['$event']) onInput(event:Event){
    // console.log("Input event occur...");
    // console.log(event.target);
    console.log((event.target as HTMLInputElement).value);
  }
}
