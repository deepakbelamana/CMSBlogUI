import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserServiceService,private toaster : ToastrService, private router:Router) { }

  ngOnInit(): void {
  }

  submitUserRegistrationForm(registrationForm:any)
  {
    this.userService.registerUser(registrationForm).subscribe((res)=>
    {
       if(res.status==200)
       {
          this.toaster.success("registered sucessfully")
          this.router.navigate(['/login'])
       }
       else{
          this.toaster.warning("user already exists with same email..!")
       }

    },(error)=>
    {
     this.toaster.error("unable to register, try again later")
    })
  }
}
