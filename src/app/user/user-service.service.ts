import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:5000/app/"
  isLogin:boolean=false;

  registerUser(data:any)
  {
    console.log(data);
    return this.http.post(this.baseUrl+"saveUser",data,{observe:'response'});
  }

  loginUser(data:any)
  {
   
    return this.http.post(this.baseUrl+"login",data,{observe:'response'});
  }
}
