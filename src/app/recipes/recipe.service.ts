import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe(
          'A teste recipe',
          'This is simply a text',
          'https://hips.hearstapps.com/del.h-cdn.co/assets/18/06/1600x800/landscape-1517928338-delish-mongolian-ramen-and-meatballs-still001.jpg?resize=640:*'
        ),
        new Recipe(
          'A teste recipe 2',
          'This is simply a text 2',
          'https://hips.hearstapps.com/del.h-cdn.co/assets/18/06/1600x800/landscape-1517928338-delish-mongolian-ramen-and-meatballs-still001.jpg?resize=640:*'
        )
      ];

    getRecipes(){
        return this.recipes.slice()
    }

    recipeSelected = new EventEmitter<Recipe>();
}