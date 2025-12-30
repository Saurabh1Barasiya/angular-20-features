import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Userservices {

  constructor(private http:HttpClient){}

  apiUrl = "http://localhost:3000/users";

  getUsers(){
    return this.http.get(this.apiUrl,{observe:'response'});
  }
}
