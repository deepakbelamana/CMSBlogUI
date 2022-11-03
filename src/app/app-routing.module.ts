import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ArticlesRoutingModule } from './article/articles-routing.module';
import { HomeComponent } from './home/home.component';
import { StaticPagesRoutingModule } from './static-pages/static-pages-routing.module';
import { UserRoutingModule } from './user/user-routing.module';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ArticlesRoutingModule,
    AdminRoutingModule,
    UserRoutingModule,
    StaticPagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
