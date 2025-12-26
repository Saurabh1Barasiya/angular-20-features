import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit{
  
  protected title = 'tut-17';

  @ViewChildren('para') para!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    console.log(this.para);

    this.para.forEach((ele)=>{
      // console.log(ele)

      (ele.nativeElement as HTMLInputElement).style.color = 'red';
      (ele.nativeElement as HTMLInputElement).style.background = 'cyan';
    })
  }
  
}
