import { SunGod } from 'model/Cards'
import { Bow } from 'model/Equipment'
import { TopSlotPlungeAttack } from 'model/PlungeAttacks'

export const SolarFlare: TopSlotPlungeAttack = {
  slot: 'Top',
  originalName: 'Solar Flare',
  weapons: () => [Bow],
  effects: () => ['Wisp Damage'],
  cards: () => [SunGod]
}
