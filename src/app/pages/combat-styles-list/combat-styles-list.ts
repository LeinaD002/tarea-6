import { Component } from '@angular/core';
import { COMBAT_STYLES } from '../../data/combat-style-data';
import { CombatStyleCard } from '../../components/combat-style-card/combat-style-card';

@Component({
  selector: 'app-combat-styles-list',
  standalone: true,
  imports: [CombatStyleCard],
  templateUrl: './combat-styles-list.html',
  styleUrl: './combat-styles-list.css',
})
export class CombatStylesList {
  styles = COMBAT_STYLES;
}
