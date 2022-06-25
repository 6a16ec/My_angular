import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstRecipeComponent } from './first_recipe/first_recipe.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './cart/cart.component';
import { IngredientService } from './ingredient.service';
import { IngredientComponent } from './singleIngredient/singleIngredient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SecondRecipeComponent } from './second_recipe/second_recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstRecipeComponent,
    HomeComponent,
    ShoppingCartComponent,
    IngredientComponent,
    SecondRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
