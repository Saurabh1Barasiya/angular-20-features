import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-26';

  items: number[] = [];
  page = 1;
  loading = false;

  constructor() {
    this.loadData();
  }

  // 🔽 Scroll detect
  @HostListener('window:scroll')
  onScroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    console.log("scroll Top",scrollTop);
    console.log("window Height",windowHeight);
    console.log("document height",documentHeight);

    if (scrollTop + windowHeight >= documentHeight - 100 && !this.loading) {
      this.loadData();
    }
  }

  // 📦 Data load
  loadData() {
    this.loading = true;

    setTimeout(() => {
      const newItems = Array.from(
        { length: 100 },
        (_, i) => (this.page - 1) * 10 + i + 1
      );

      this.items.push(...newItems);
      this.page++;
      this.loading = false;
    }, 1000);
  }
}
