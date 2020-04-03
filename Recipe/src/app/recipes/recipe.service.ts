import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Mac and Cheese', 'Macaroni noodles in cheesy pasta sauce', 'https://www.cookingclassy.com/wp-content/uploads/2018/07/stovetop-macaroni-cheese-1.jpg', [
      new Ingredient('Cheese Block', 1),
      new Ingredient('Macaroni Noodles', 137)
    ]),
    new Recipe('Steak', 'Marinated steak', 'https://cdn.apartmenttherapy.info/image/fetch/f_jpg,q_auto:eco,w_1500,c_fill,g_auto,ar_1:1/http%3A%2F%2Fcdn.apartmenttherapy.info%2Fimage%2Fupload%2Fv1555609704%2Fk%2Farchive%2Fe3ce4eb1741bd76cc083424453c0e3f39d147f9b.jpg', [
      new Ingredient('Steak', 1),
      new Ingredient('Marinating Sauce', 1)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}