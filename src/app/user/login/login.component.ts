import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserServiceService,private router : Router, private toaster : ToastrService) { }

  ngOnInit(): void {
  }

  LoginForm(loginForm:any)
  {
    this.userService.loginUser(loginForm).subscribe((res)=>
    {
      if(res.status!=200)
      {
        this.toaster.warning("invalid email/password..!")
      }
      else{
        this.userService.isLogin=true;
        sessionStorage.setItem("loggedIn","true")
        this.toaster.success("successfull login..!")
        this.router.navigate(['/'])
      }

    },(error)=>{
        console.log(error)
        this.toaster.error("unable to login..!, please try later")
    })
  }
}
