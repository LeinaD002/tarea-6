import { Component, Input } from '@angular/core';
import { CombatStyle } from '../../data/combat-style-data';

@Component({
  selector: 'app-combat-style-card',
  standalone: true,
  templateUrl: './combat-style-card.html',
  styleUrl: './combat-style-card.css',
})
export class CombatStyleCard {
  @Input({ required: true }) style!: CombatStyle;
}
