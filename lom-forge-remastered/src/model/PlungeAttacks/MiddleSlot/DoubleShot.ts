import { Bow } from 'model/Equipment'
import { MiddleSlotPlungeAttack } from 'model/PlungeAttacks'

export const DoubleShot: MiddleSlotPlungeAttack = {
  slot: 'Middle',
  originalName: 'Double Shot',
  weapons: () => [Bow],
  effects: () => ['Default (Middle Slot)']
}
