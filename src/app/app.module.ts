import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ArticleModule } from './article/article.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { StaticPagesModule } from './static-pages/static-pages.module';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticleModule,
    AdminModule,
    UserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSelectModule,
    StaticPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
