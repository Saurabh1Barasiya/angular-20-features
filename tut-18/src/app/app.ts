import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'tut-18';

  products: { id: number, name: string, category: string, price: number }[] = [
    {
      id: 1,
      name: 'Apple iPhone 15',
      category: 'Mobile',
      price: 79999
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      category: 'Mobile',
      price: 74999
    },
    {
      id: 3,
      name: 'OnePlus 12 Pro',
      category: 'Mobile',
      price: 68999
    },
    {
      id: 4,
      name: 'Apple MacBook Air M2',
      category: 'Laptop',
      price: 114999
    },
    {
      id: 5,
      name: 'Dell Inspiron 15',
      category: 'Laptop',
      price: 65999
    },
    {
      id: 6,
      name: 'HP Pavilion Gaming Laptop',
      category: 'Laptop',
      price: 78999
    },
    {
      id: 7,
      name: 'Sony WH-1000XM5 Headphones',
      category: 'Accessories',
      price: 29999
    },
    {
      id: 8,
      name: 'Boat Rockerz 450',
      category: 'Accessories',
      price: 1999
    },
    {
      id: 9,
      name: 'Apple Watch Series 9',
      category: 'Wearable',
      price: 41999
    },
    {
      id: 10,
      name: 'Samsung Galaxy Watch 6',
      category: 'Wearable',
      price: 34999
    }
  ];

  filteredData: { id: number, name: string, category: string, price: number }[] = []
  totelItem!: number;
  ngOnInit(): void {
    this.filteredData = this.products;
    this.totelItem = this.filteredData.length;
  }

  sugesstion(inp: string) {

    let searchText = inp.toLowerCase().trim();
    if (!searchText) {
      // searchText is empty.
      this.filteredData = this.products;
    } else {
      // searchText is available.
      this.filteredData = this.products.filter((prod) => prod.name.toLowerCase().includes(searchText));
    }

    this.totelItem = this.filteredData.length;
  }

  sortByPriceAscending() {
    this.filteredData = this.filteredData.sort((p1, p2) => {
      return p1.price - p2.price;
    })
  }

  sortByPriceDscending() {
    this.filteredData = this.filteredData.sort((p1, p2) => {
      return p2.price - p1.price;
    })
  }

}
