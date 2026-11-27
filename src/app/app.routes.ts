import { Routes } from '@angular/router';
import { Hero } from './shared/components/hero/hero';
import { GenerateRecipe } from './shared/components/generate-recipe/generate-recipe';
import { PreferencesRecipe } from './shared/components/preferences-recipe/preferences-recipe';

export const routes: Routes = [
  {
    path: 'home',
    component: Hero,
  },
  {
    path: 'generate-recipe',
    component: GenerateRecipe,
  },
  {
    path: 'preferences-recipe',
    component: PreferencesRecipe,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];
