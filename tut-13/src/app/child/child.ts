import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child implements AfterContentInit{
  
  @ContentChild('p1') p1!:ElementRef;
  @ContentChild('p2') p2!:ElementRef;
  @ContentChild('p3') p3!:ElementRef;

  ngAfterContentInit(): void {
    (this.p1.nativeElement as HTMLElement).style.background = 'red';
    (this.p2.nativeElement as HTMLElement).style.background = 'yellow';
    (this.p3.nativeElement as HTMLElement).style.background = 'green';

    console.log((this.p1.nativeElement as HTMLElement).textContent);
    console.log((this.p2.nativeElement as HTMLElement).textContent);
    console.log((this.p3.nativeElement as HTMLElement).textContent);
  }
}
