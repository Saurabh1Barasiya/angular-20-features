import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  imports: [],
  templateUrl: './comp-b.html',
  styleUrl: './comp-b.css',
})
export class CompB implements DoCheck{
  ngDoCheck(){
    console.log("Run from component B")
  }
  data = 100;
  dec(){
    this.data--;
  }
}
