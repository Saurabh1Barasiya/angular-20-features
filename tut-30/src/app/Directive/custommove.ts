import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustommove]'
})
export class Custommove {

  constructor() { }

  @HostBinding('style.border') border = '';
  @HostBinding('style.color') color = ''; 
  @HostBinding('style.backgroundColor') backgroundColor = ''; 
  @HostBinding('style.padding') padding = ''; 
  @HostBinding('style.fontSize') fontSize = '';
  @HostBinding('class.active') active = true;
  @HostBinding('id') id = "";


  @HostListener("mouseenter") onMouseEnter(){
    this.border = "2px solid red";
    this.color = "blue";
    this.backgroundColor = "cyan";
    this.fontSize = "3rem",
    this.padding = "1rem"
    this.active = true;
    this.id = "unique"
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.border = "";
    this.color = "";
    this.backgroundColor = "";
    this.fontSize = "",
    this.padding = ""
    this.active = true;
    this.id = ""
  }

}
