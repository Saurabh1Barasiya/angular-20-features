import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productservices } from './Services/productservices';
import { ActualProduct } from './Models/Product.model';
import { filter, map, tap } from 'rxjs';
import { CartInnerData, CartResponse, PerticularProduct } from './Models/CartProduct.model';
import { TmplAstBlockNode } from '@angular/compiler';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-39';

  constructor(private ps: Productservices) { }

  productArray: ActualProduct[] = [];

  getdata() {
    this.ps.getProducts()
      .pipe(
        map(res => res.products.map((p: ActualProduct) => ({
          id: p.id,
          title: p.title,
          description: p.description,
          category: p.category,
          price: p.price,
          discountPercentage: p.discountPercentage,
          rating: p.rating,
          stock: p.stock,
          tags: p.tags
        })
        ))
      )
      .subscribe({
        // next: (res) => {
        // console.log("totel response", res);
        // console.log("limit ", res.limit);
        // console.log("skip", res.skip);
        // console.log("totel", res.totel);
        // console.log("product array", res.products);
        // console.log(res);
        // }

        next: (data: ActualProduct[]) => {
          this.productArray = data;
        }
      }
      )
  }

  getItems() {
    this.ps.getCartItems()
    .pipe(
      tap((res)=>{
        console.log("respose 1",res)
      }),
      map((e)=>e.carts),
      tap((res2)=>{console.log("response 2",res2)}), 
      map((ele:CartInnerData[])=>{
        return ele.map((ele)=>ele.products).filter((d)=>d.length < 3);
      }),
      tap((res3)=>{console.log("--",res3)})
    )
    .subscribe({
      next: (res) => {
        console.log("next",res);
      }
    })
  }


}
