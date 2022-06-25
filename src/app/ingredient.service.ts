import {Injectable} from "@angular/core";

@Injectable()
export class IngredientService {
  private _ingredients: string[] = Object.values(JSON.parse(window.localStorage.getItem('ingredients') ?? "{}"));


  get ingredients() {
    return [...this._ingredients];
  }

  addIngredient(new_ingredient: string) {
    this._ingredients = [...this._ingredients, new_ingredient];
    window.localStorage.setItem('ingredients', JSON.stringify(this._ingredients));
  }

  deleteIngredient(old_ingredient: string) {
    const index = this.ingredients.indexOf(old_ingredient);

    if (index === -1) {
      return;
    }

    this._ingredients = [...this.ingredients.slice(0, index), ...this.ingredients.slice(index+1)];
    window.localStorage.setItem('ingredients', JSON.stringify(this._ingredients));
  }
}
