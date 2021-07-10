import { Item, ItemCategory } from 'model/Items'
import { EarOfWheat, Electricity, Moss } from 'model/Items/Urns'

export const Urns: ItemCategory = 'Urns'

export const AllUrns: Item[] = [Electricity, Moss, EarOfWheat]

export const AllUrnsByForgeCode: { [code: string]: Item } = {
  '102': Electricity,
  '103': Moss,
  '104': EarOfWheat
}

export const AllUrnsById: { [id: string]: Item } = Object.fromEntries(AllUrns.map((urn) => [urn.id, urn]))

export * from './EarOfWheat'
export * from './Electricity'
export * from './Moss'
