import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements OnChanges{
  
  @Input() parentNum!:number;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log("current value",changes['parentNum'].currentValue);
    console.log("previous value",changes['parentNum'].previousValue);
    console.log("firstChange",changes['parentNum'].firstChange);
  }
}
