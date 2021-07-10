import { Item, ItemCategory } from 'model/Items'
import { AngelFeather, ClearFeather, FlamingQuill, MothWing, RavenFeather, WhiteFeather } from 'model/Items/Feathers'

export const Feathers: ItemCategory = 'Feathers'

export const AllFeathers: Item[] = [AngelFeather, RavenFeather, ClearFeather, MothWing, FlamingQuill, WhiteFeather]

export const AllFeathersByForgeCode: { [code: string]: Item } = {
  '86': AngelFeather,
  '87': RavenFeather,
  '88': ClearFeather,
  '89': MothWing,
  '90': FlamingQuill,
  '91': WhiteFeather
}

export const AllFeathersById: { [id: string]: Item } = Object.fromEntries(
  AllFeathers.map((feather) => [feather.id, feather])
)

export * from './AngelFeather'
export * from './ClearFeather'
export * from './FlamingQuill'
export * from './MothWing'
export * from './RavenFeather'
export * from './WhiteFeather'
