import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartReponse } from '../Model/cart.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiurl = 'https://dummyjson.com/carts';

  constructor(private http:HttpClient){}

  getData():Observable<CartReponse>{
    return this.http.get<CartReponse>(this.apiurl)
  }
}
