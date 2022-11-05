import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogIn : boolean= false
  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
    sessionStorage.setItem("loggedIn","false")
  }

  isLogin():boolean
  {
    return sessionStorage.getItem("loggedIn")=="true"?true:false;
  }

  logOut()
  {
    sessionStorage.setItem("loggedIn","false")
  }
}
