import { Item, ItemCategory } from 'model/Items'
import { BakedRoach, BlackenedBat } from 'model/Items/Pellets'

export const Pellets: ItemCategory = 'Pellets'

export const AllPellets: Item[] = [BakedRoach, BlackenedBat]

export const AllPelletsByForgeCode: { [code: string]: Item } = {
  '105': BakedRoach,
  '106': BlackenedBat
}

export const AllPelletsById: { [id: string]: Item } = Object.fromEntries(
  AllPellets.map((pellet) => [pellet.id, pellet])
)

export * from './BakedRoach'
export * from './BlackenedBat'
