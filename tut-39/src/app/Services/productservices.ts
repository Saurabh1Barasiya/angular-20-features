import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../Models/Product.model';
import { CartResponse } from '../Models/CartProduct.model';

@Injectable({
  providedIn: 'root',
})
export class Productservices {

  constructor(private http:HttpClient){}

  
  

  getProducts():Observable<ProductResponse>{
    let apiUrl = "https://dummyjson.com/products";
    return this.http.get<ProductResponse>(apiUrl);
  }

  getCartItems():Observable<CartResponse>{
    let apiUrl = "https://dummyjson.com/carts";
    return this.http.get<CartResponse>(apiUrl);
  }


}
