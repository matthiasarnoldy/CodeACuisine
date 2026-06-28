import { Routes } from '@angular/router';
import { Hero } from './shared/components/hero/hero';

export const routes: Routes = [
  {
    path: 'home',
    component: Hero,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];
