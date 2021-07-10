import { Item, ItemCategory } from 'model/Items'
import { GreenballBun, TakoBug } from 'model/Items/None'

export const None: ItemCategory = undefined

export const AllNones: Item[] = [GreenballBun, TakoBug]

export const AllNonesByForgeCode: { [code: string]: Item } = {
  '119': GreenballBun,
  '120': TakoBug
}

export const AllNonesById: { [id: string]: Item } = Object.fromEntries(AllNones.map((none) => [none.id, none]))

export * from './GreenballBun'
export * from './TakoBug'
