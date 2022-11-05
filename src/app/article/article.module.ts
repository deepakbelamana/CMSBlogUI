import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ArticleDetailsComponentComponent } from './article-details-component/article-details-component.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    LatestArticlesComponent,
    ArticleDetailsComponentComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    UserModule
  ],
  exports:[LatestArticlesComponent]
})
export class ArticleModule { }
