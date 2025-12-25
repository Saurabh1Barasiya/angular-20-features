import { Component, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @ContentChildren('para') para!: QueryList<ElementRef>;
  ngAfterContentInit(): void {
    console.log("ng after content liye cylce hook");

    this.para.forEach((paragraph) => {
      console.log(paragraph);
      (paragraph.nativeElement as HTMLElement).style.background = 'blue' 
    })
  }
}
