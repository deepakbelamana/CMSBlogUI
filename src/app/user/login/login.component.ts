import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserServiceService,private router : Router) { }

  ngOnInit(): void {
  }

  LoginForm(loginForm:any)
  {
    this.userService.loginUser(loginForm).subscribe((res)=>
    {
      this.router.navigate(['/'])
    })
  }
}
