import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
  }

  submitUserRegistrationForm(registrationForm:any)
  {
    this.userService.registerUser(registrationForm).subscribe((res)=>
    {
       console.log(res);
       sessionStorage.setItem("loggedIn","true")
    })
  }
}
