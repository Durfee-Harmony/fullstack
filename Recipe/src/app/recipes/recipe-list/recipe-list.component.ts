import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test', 'this is a test', 'https://i2.wp.com/northogdenconnection.com/wp-content/uploads/2018/07/Recipe-Icon-1.png?ssl=1'),
    new Recipe('Another Test', 'this is a second test', 'https://i2.wp.com/northogdenconnection.com/wp-content/uploads/2018/07/Recipe-Icon-1.png?ssl=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
