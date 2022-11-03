import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponentComponent } from './article-details-component/article-details-component.component';


const routes: Routes = [

{path:'article',component:ArticleDetailsComponentComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
