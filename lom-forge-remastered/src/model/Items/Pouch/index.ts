import { Item, ItemCategory } from 'model/Items'
import { Hairball, MessyScroll, MirrorPiece, Needle, WadOfWool } from 'model/Items/Pouch'

export const Pouch: ItemCategory = 'Pouch'

export const AllPouches: Item[] = [Hairball, Needle, MirrorPiece, WadOfWool, MessyScroll]

export const AllPouchesByForgeCode: { [code: string]: Item } = {
  '114': Hairball,
  '115': Needle,
  '116': MirrorPiece,
  '117': WadOfWool,
  '118': MessyScroll
}

export const AllPouchesById: { [id: string]: Item } = Object.fromEntries(AllPouches.map((pouch) => [pouch.id, pouch]))

export * from './Hairball'
export * from './MessyScroll'
export * from './MirrorPiece'
export * from './Needle'
export * from './WadOfWool'
