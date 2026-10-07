export interface CombatStyleCharacterNode {
  id: number;
  character_id: number;
  character_name: string;
  combat_style_id: number;
  combat_style_name: string;
  mastery_level: string;
  years_practicing: number;
}

export interface CombatStyle {
  id: number;
  name: string;
  description: string;
  image: string;
  image_alt: string;
  node: CombatStyleCharacterNode;
}

export const COMBAT_STYLES: CombatStyle[] = [
  {
    id: 1,
    name: 'Taijutsu',
    description: 'Combate cuerpo a cuerpo que prioriza la velocidad, la fuerza y el dominio técnico del propio cuerpo.',
    image: 'combat-taijutsu.svg',
    image_alt: 'Ilustración de una postura de combate cuerpo a cuerpo',
    node: {
      id: 101,
      character_id: 1,
      character_name: 'Might Guy',
      combat_style_id: 1,
      combat_style_name: 'Taijutsu',
      mastery_level: 'Experto',
      years_practicing: 20,
    },
  },
  {
    id: 2,
    name: 'Kenjutsu',
    description: 'Disciplina de combate con espada que combina precisión, control de distancia y movimientos fluidos.',
    image: 'combat-kenjutsu.svg',
    image_alt: 'Ilustración de una espada cruzada en diagonal',
    node: {
      id: 102,
      character_id: 2,
      character_name: 'Kakashi Hatake',
      combat_style_id: 2,
      combat_style_name: 'Kenjutsu',
      mastery_level: 'Avanzado',
      years_practicing: 15,
    },
  },
];
