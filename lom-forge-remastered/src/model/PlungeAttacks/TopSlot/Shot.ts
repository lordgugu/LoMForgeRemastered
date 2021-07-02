import { Bow } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const Shot: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Shot',
  weapons: () => [Bow],
  effects: () => ['Default (Top Slot)']
}
