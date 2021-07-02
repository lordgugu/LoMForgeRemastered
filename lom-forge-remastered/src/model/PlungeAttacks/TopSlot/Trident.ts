import { OceanGod } from 'model/Cards'
import { Spear } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const Trident: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Trident',
  weapons: () => [Spear],
  effects: () => ['Aquatic Damage +', 'Confusion vs. Aquatic'],
  cards: () => [OceanGod]
}
