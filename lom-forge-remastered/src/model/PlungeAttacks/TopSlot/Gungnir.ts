import { TopSlotPlungeAttack } from 'model/PlungeAttacks'
import { Spear } from 'model/Weapons'

export const Gungnir: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Gungnir',
  weapons: [Spear],
  effects: ['Spirit Up', 'Attack Gauge +'],
  cards: ['Ruler of Sky']
}
