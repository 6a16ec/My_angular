import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'second_recipe',
  templateUrl: './second_recipe.component.html',
  styleUrls: ['./second_recipe.component.css']
})
export class SecondRecipeComponent {

  constructor(
    private readonly ingredientService: IngredientService
  ) { }

  addRecipe(event: any) {
    const data = event.target.closest('tr').children
    const ingredient_name: string = [data[0].innerText, data[1].innerText].join(' ');
    alert(`Ingredient ${ingredient_name} added to shopping cart`);
    this.ingredientService.addIngredient(ingredient_name);
}  

}
