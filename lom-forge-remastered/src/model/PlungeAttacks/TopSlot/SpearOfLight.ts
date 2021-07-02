import { ManOfValor } from 'model/Cards'
import { Spear } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const SpearOfLight: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Spear of Light',
  weapons: () => [Spear],
  effects: () => ['Wisp Damage'],
  cards: () => [ManOfValor]
}
