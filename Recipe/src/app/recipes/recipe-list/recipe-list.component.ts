import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'this is a test', 'https://s23209.pcdn.co/wp-content/uploads/2018/09/Creamy-Beef-and-ShellsIMG_6411.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
