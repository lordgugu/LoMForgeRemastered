import { Item, ItemCategory } from 'model/Items'
import { Earthstone, Firestone, Waterstone, Windstone } from 'model/Items/MagicStones'

export const MagicStones: ItemCategory = 'Magic Stones'

export const AllMagicStones: Item[] = [Firestone, Earthstone, Windstone, Waterstone]

export const AllMagicStonesByForgeCode: { [code: string]: Item } = {
  '17': Firestone,
  '18': Earthstone,
  '19': Windstone,
  '20': Waterstone
}

export const AllMagicStonesById: { [id: string]: Item } = Object.fromEntries(
  AllMagicStones.map((magicStone) => [magicStone.id, magicStone])
)

export * from './Earthstone'
export * from './Firestone'
export * from './Waterstone'
export * from './Windstone'
