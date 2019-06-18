import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe(
          'A teste recipe',
          'This is simply a text',
          'https://hips.hearstapps.com/del.h-cdn.co/assets/18/06/1600x800/landscape-1517928338-delish-mongolian-ramen-and-meatballs-still001.jpg?resize=640:*',
          [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',20)
          ]),
          new Recipe(
            'A teste recipe 2',
            'This is simply a text 2',
            'https://img.elo7.com.br/product/zoom/22565B3/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-parede.jpg?resize=640:*',
            [
              new Ingredient('Buns',2),
              new Ingredient('Meat',3)    
          ])
      ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice()
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    recipeSelected = new EventEmitter<Recipe>();
}