import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserArticlesComponent } from './user-articles/user-articles.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NewArticleComponent } from './new-article/new-article.component';



@NgModule({
  declarations: [
    UserArticlesComponent,
    RegisterComponent,
    LoginComponent,
    NewArticleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[UserArticlesComponent]
})
export class UserModule { }
