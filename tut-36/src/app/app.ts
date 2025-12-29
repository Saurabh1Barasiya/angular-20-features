import { NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  protected title = 'tut-36';

  data:number[] = [];
  page:number=1;

  @ViewChild("end") end!: ElementRef;
  isLoading:boolean = false;

  ngAfterViewInit(): void {
    this.createObserver();
    this.loadData();
  }


  createObserver(){
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      // 👉 intersectionRatio = kitna part (%) of element viewport ke andar hai
      //     Ye value 0 se 1 ke beech hoti hai
      //     Ye ratio / percentage batati hai

      console.log("kitna % ander aa gaya ",entries[0].intersectionRatio) // elememnt kitana ander aaya hai.
      if(entries[0].isIntersecting && !this.isLoading){
        console.log(entries[0].target)
        console.log(entries[0].isIntersecting)
        
        this.loadData();
      }
    }, {
      threshold: 1, //  jab element pura vivible ho screen par tab hi app api call kero.
      rootMargin: '200px',  // means jab end element viewport se 200px dur ho call the api.
    })


    observer.observe(this.end.nativeElement); // ab ye observe karege kya 
    // hamara end element viewport (screen) par aaya h kya ?
  }


  loadData() {
    console.log("please call the api...");

    this.isLoading = true;

    // Fake API call
    setTimeout(() => {
      const newItems = Array.from(
        { length: 10 },
        (_, i) => (this.page - 1) * 10 + i + 1
      );

      this.data.push(...newItems);
      this.page++;
      this.isLoading = false;
    }, 1000);
  }
}
