import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class Customdirective {

  constructor(private el:ElementRef,private renderer : Renderer2) {

    console.log(el)

    this.renderer.setStyle(this.el.nativeElement,"color","red");
    this.renderer.setStyle(this.el.nativeElement,"background","blue")
    this.renderer.setStyle(this.el.nativeElement,"padding","1rem")
  }

}
