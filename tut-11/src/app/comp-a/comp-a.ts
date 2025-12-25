import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-comp-a',
  imports: [],
  templateUrl: './comp-a.html',
  styleUrl: './comp-a.css',
})
export class CompA implements DoCheck{
  ngDoCheck(){
    console.log("Run from component A")
  }

  num = 0;
  inc(){
    this.num ++;
  }
}
