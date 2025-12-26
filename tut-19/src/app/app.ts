import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Userservices } from '../Services/userservices';
import { User } from '../Model/User.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'tut-19';
  constructor(private us: Userservices) { }

  userData: User[] = [];
  filteredData: User[] = [];
  totalItem!: number;
  totelPage!: number;
  ngOnInit(): void {
    this.us.getFullData().subscribe({
      next: (res) => {
        // console.log(res);
        this.userData = res;
        this.filteredData = this.userData;
        this.totalItem = this.filteredData.length;
        this.totelPage = this.userData.length / this.limit
        this.display();
      }
    })
  }

  page = 1;
  limit = 10;
  display() {
    let startIndex = (this.page - 1) * this.limit;
    let endIndex = startIndex + this.limit;
    this.filteredData = this.userData.slice(startIndex, endIndex);
  }

  pre() {
    if (this.page > 1) {
      this.page--;
      this.display();
    }
  }

  nex() {
    if (this.page < this.totelPage) {
      this.page++;
      this.display();
    }
  }
}
