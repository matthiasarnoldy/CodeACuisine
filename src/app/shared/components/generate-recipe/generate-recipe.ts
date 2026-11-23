import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from "../header/header";

@Component({
  selector: 'app-generate-recipe',
  templateUrl: './generate-recipe.html',
  styleUrl: './generate-recipe.scss',
  imports: [Header, RouterLink],
})
export class GenerateRecipe {}
