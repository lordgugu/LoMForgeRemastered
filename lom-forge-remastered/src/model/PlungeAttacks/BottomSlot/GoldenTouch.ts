import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'
import { Staff } from 'model/Weapons'

export const GoldenTouch: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Golden Touch',
  weapons: [Staff],
  effects: ['Converts experience to Lucre', 'Attack Gauge &minus;'],
  cards: ['Wings of Darkness']
}
