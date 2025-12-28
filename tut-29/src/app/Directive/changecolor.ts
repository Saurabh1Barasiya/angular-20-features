import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class Changecolor {

  constructor() { }

  @HostBinding('style.color') color='red'; 
  @HostBinding('style.fontSize') fontSize = '3rem';
  @HostBinding('style.backgroundColor') background = 'cyan';
  @HostBinding('style.border') border='2px solid red';
  @HostBinding('class.active') active = true;
  @HostBinding('id') id = "unique";

}

