import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../Models/users.model';

@Injectable({
  providedIn: 'root',
})
export class Userservices {

  constructor(private http:HttpClient){}

  apiUrl = "http://localhost:3000/users";

  getUsers():Observable<UserInfo[]>{
    return this.http.get<UserInfo[]>(this.apiUrl);
  }

  
}
