import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './Services/user-service';
import { map, tap } from 'rxjs';
import { CartData, CartReponse, ProductData } from './Model/cart.model';
import { TmplAstBlockNode } from '@angular/compiler';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private us:UserService){}
  protected title = 'tut-40';

  loadData(){
    this.us.getData()
    .pipe(
      // tap((res)=>{console.log(res.carts)})

      map((res:CartReponse)=>res.carts),
      // tap((res:CartData[])=>{console.log(res)}),

      map((res:CartData[])=>res.map((ele)=>ele.products)),
      
      map((res:ProductData[][])=>res.map((ele)=>{
        return ele.map((el)=>el.price)
      })),

      map((res:number[][])=>res.flat())
     
    )
    .subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
  }
}
