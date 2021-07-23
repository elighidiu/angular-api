import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { MealsComponent } from './meals/meals.component';


const routes: Routes = [
  {
    path: '',
    component: MealsComponent
  },
  {
    path:'category',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
