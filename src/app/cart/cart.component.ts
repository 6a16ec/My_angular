import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class ShoppingCartComponent {

  constructor(
    private ingredientService: IngredientService
  ) { }

  ingredientInput = new FormControl();

  get ingredients() {
    return this.ingredientService.ingredients;
  }

  onDelete(ingredient: string) {
    this.ingredientService.deleteIngredient(ingredient);
  }

  addIngredient() {
    this.ingredientService.addIngredient(this.ingredientInput.value);
    this.ingredientInput.setValue('');
  }

}
