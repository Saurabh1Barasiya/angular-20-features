import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface USERSDATA {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  constructor(private http: HttpClient) { }
  protected title = 'tut-37';

  private observer!: IntersectionObserver;


  users: USERSDATA[] = [];
  page: number = 0;
  limit = 30;
  totelLength!: number;
  isLoading = false;
  hasMore = true;

  @ViewChild('end') end!: ElementRef;

  ngAfterViewInit(): void {
    this.loadData();
    this.createObserver();
  }

  loadData() {
    if(this.isLoading || !this.hasMore){
      return
    }

    this.isLoading = true;
    let skip = this.page * this.limit;
    

    // calling an api.
    let url = `https://dummyjson.com/users?limit=${this.limit}&skip=${skip}`;

    this.http.get<any>(url).subscribe({
      next:(res)=>{
        console.log(res);

        this.users.push(...res.users);
        this.page ++;
        this.totelLength = res.total;
        
        this.isLoading = false;

        if(this.users.length >= this.totelLength){
          this.hasMore = false;
          this.observer.disconnect();   // disconnect the observer.
        }
      }
    })

  }

  createObserver() {
     this.observer = new IntersectionObserver(
      (entrys) => {
        let entry = entrys[0];
        if (entry.isIntersecting) {
          this.loadData();
        }
      },
      {
        threshold:1,
        rootMargin:'200px',
      }
    )

    this.observer.observe(this.end.nativeElement);
  }

}
