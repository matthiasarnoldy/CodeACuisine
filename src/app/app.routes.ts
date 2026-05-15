import { Routes } from '@angular/router';
import { Hero } from './shared/components/hero/hero';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Hero,
  },
];
