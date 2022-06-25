import {Component} from "@angular/core";
import { IngredientService } from "../ingredient.service";

@Component({
  selector: 'first_recipe',
  templateUrl: './first_recipe.component.html',
  styleUrls: ['./first_recipe.component.css']
})
export class FirstRecipeComponent {

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
