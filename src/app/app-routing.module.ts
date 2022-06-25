import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FirstRecipeComponent} from "./first_recipe/first_recipe.component";
import { SecondRecipeComponent } from './second_recipe/second_recipe.component';
import { ShoppingCartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: 'first_recipe',
    component: FirstRecipeComponent,
  },
  {
    path: 'second_recipe',
    component: SecondRecipeComponent,
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
