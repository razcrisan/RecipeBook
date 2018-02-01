import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test Recipe','https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps25157_FM153592B03_18_12b.jpg' ),
    new Recipe('Another Test Recipe', 'This is simply a test Recipe', 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps25157_FM153592B03_18_12b.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
