import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { MateComponent } from './pages/mate/mate.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { IndentComponent } from './pages/indent/indent.component';
import { AffirmComponent } from './pages/affirm/affirm.component';

const routes: Routes = [
  {
    path:"index",
    component:IndexComponent
  },
  {
    path:'mate',
    component:MateComponent
  },
  {
    path:'shopping/:id',
    component:ShoppingComponent
  },
  {
    path:'indent',
    component:IndentComponent
  },
  {
    path:'affirm',
    component:AffirmComponent
  },
  {
    path:"",
    redirectTo:"index",
    pathMatch:"full"
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }