import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Userservices } from './Services/userservices';
import { UserInfo } from './Models/users.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'tut-38';

  usersArray: UserInfo[] = [];
  paginatedData: UserInfo[] = [];
  totalPage!: number;

  pagesArray:number[] = [];

  page = 1;
  limit = 10;

  constructor(private us: Userservices) { }

  ngOnInit(): void {
    this.us.getUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.usersArray = res;
        this.totalPage = Math.ceil( this.usersArray.length / this.limit );
        console.log("totel page is :",this.totalPage);

        this.pagesArray = Array.from({length:this.totalPage},(_,index)=>index+1)
        console.log(this.pagesArray);
        this.display();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


  nextData() {
    if(this.page < this.totalPage){
      this.page ++;
      this.display();
    }
  }

  previousData() {
    if(this.page > 1){
      this.page --;
      this.display();
    }
  }

  display() {
    let startIndex = (this.page - 1) * this.limit;
    let endIndex = startIndex + this.limit;
    this.paginatedData = this.usersArray.slice(startIndex,endIndex);
  }

  goTopage(p:number){
    this.page = p;
    this.display();
  }

}
