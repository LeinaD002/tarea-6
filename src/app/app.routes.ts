import { Routes } from '@angular/router';
import { CombatStylesList } from './pages/combat-styles-list/combat-styles-list';
export const routes: Routes = [
  { path: '', redirectTo: 'combat-styles', pathMatch: 'full' },
  { path: 'combat-styles', component: CombatStylesList },
  { path: '**', redirectTo: 'combat-styles' },
];
