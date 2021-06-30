import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Hammer } from 'model/Weapons'

export const QuakeHammer: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Quake Hammer',
  weapons: [Hammer],
  effects: ['Inflicts Aura/Gnome Damage', 'Defense Up'],
  cards: ['Spirit (Mountain)']
}
