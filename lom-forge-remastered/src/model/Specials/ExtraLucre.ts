import { GoddessOfLove, SpiritOfHousework } from 'model/Cards'
import { Pendant, Ring } from 'model/Gear/Equipment'
import { Special } from 'model/Specials'

export const ExtraLucre: Special = {
  id: 'ExtraLucre',
  name: 'Extra Lucre',
  effect: ['Earn more Lucre in battle'],
  relatedEquipment: () => [Ring, Pendant],
  relatedCards: () => [SpiritOfHousework, GoddessOfLove]
}
