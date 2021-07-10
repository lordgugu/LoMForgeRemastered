import { Item, ItemCategory } from 'model/Items'
import { Acid, AromaOil, DragonBlood, Ether, HolyWater } from 'model/Items/Bottles'

export const Bottles: ItemCategory = 'Bottles'

export const AllBottles: Item[] = [AromaOil, DragonBlood, Acid, HolyWater, Ether]

export const AllBottlesByForgeCode: { [code: string]: Item } = {
  '92': AromaOil,
  '93': DragonBlood,
  '94': Acid,
  '95': HolyWater,
  '96': Ether
}

export const AllBottlesById: { [id: string]: Item } = Object.fromEntries(
  AllBottles.map((bottle) => [bottle.id, bottle])
)

export * from './Acid'
export * from './AromaOil'
export * from './DragonBlood'
export * from './Ether'
export * from './HolyWater'
