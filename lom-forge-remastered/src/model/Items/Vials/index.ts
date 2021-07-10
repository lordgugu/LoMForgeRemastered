import { Item, ItemCategory } from 'model/Items'
import { DamselsSigh, DragonsBreath, GhostsHowl, Mercury, StinkyBreath } from 'model/Items/Vials'

export const Vials: ItemCategory = 'Vials'

export const AllVials: Item[] = [Mercury, StinkyBreath, GhostsHowl, DragonsBreath, DamselsSigh]

export const AllVialsByForgeCode: { [code: string]: Item } = {
  '97': Mercury,
  '98': StinkyBreath,
  '99': GhostsHowl,
  '100': DragonsBreath,
  '101': DamselsSigh
}

export const AllVialsById: { [id: string]: Item } = Object.fromEntries(AllVials.map((vial) => [vial.id, vial]))

export * from './DamselsSigh'
export * from './DragonsBreath'
export * from './GhostsHowl'
export * from './Mercury'
export * from './StinkyBreath'
