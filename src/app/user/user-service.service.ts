import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:3000/"
  isLogin:boolean=false;

  registerUser(data:any)
  {
    console.log(data);
    return this.http.post(this.baseUrl+"register",data);
  }

  loginUser(data:any)
  {
    this.isLogin=true;
    sessionStorage.setItem("loggedIn","true")
    return this.http.post(this.baseUrl+"login",data);
  }
}
