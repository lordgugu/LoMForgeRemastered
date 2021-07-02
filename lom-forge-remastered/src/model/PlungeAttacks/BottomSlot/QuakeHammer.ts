import { SpiritOfMountain } from 'model/Cards'
import { Hammer } from 'model/Equipment'
import { BottomSlotPlungeAttack } from 'model/PlungeAttacks'

export const QuakeHammer: BottomSlotPlungeAttack = {
  slot: 'Bottom',
  originalName: 'Quake Hammer',
  weapons: () => [Hammer],
  effects: () => ['Aura Damage', 'Gnome Damage', 'Defense Up'],
  cards: () => [SpiritOfMountain]
}
