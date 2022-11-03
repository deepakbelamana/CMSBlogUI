import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { ArticleDetailsComponentComponent } from './article-details-component/article-details-component.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    LatestArticlesComponent,
    ArticleDetailsComponentComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports:[LatestArticlesComponent]
})
export class ArticleModule { }
