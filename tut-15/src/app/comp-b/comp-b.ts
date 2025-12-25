import { AfterContentChecked, Component } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  imports: [],
  templateUrl: './comp-b.html',
  styleUrl: './comp-b.css',
})
export class CompB implements AfterContentChecked{
  ngAfterContentChecked(): void {
    console.log("projected content is changed.");
  }
}
