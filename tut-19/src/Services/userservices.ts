import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Userservices {
  constructor(private http:HttpClient){}

  apiRul = "http://localhost:3000/users";

  getFullData():Observable<User[]>{
    return this.http.get<User[]>(this.apiRul);
  }
}
