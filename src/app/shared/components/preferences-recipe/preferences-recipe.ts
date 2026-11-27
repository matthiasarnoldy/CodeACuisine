import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from "../header/header";

@Component({
  selector: 'app-preferences-recipe',
  templateUrl: './preferences-recipe.html',
  styleUrl: './preferences-recipe.scss',
  imports: [Header, RouterLink],
})
export class PreferencesRecipe {}
