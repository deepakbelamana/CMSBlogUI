import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserArticlesComponent } from './user-articles/user-articles.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    UserArticlesComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[UserArticlesComponent]
})
export class UserModule { }
