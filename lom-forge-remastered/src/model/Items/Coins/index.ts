import { Item, ItemCategory } from 'model/Items'
import {
  AuraGold,
  AuraSilver,
  DryadGold,
  DryadSilver,
  GnomeGold,
  GnomeSilver,
  JinnGold,
  JinnSilver,
  SalamanderGold,
  SalamanderSilver,
  ShadeGold,
  ShadeSilver,
  UndineGold,
  UndineSilver,
  WispGold,
  WispSilver
} from 'model/Items/Coins'

export const Coins: ItemCategory = 'Coins'

export const AllCoins: Item[] = [
  WispGold,
  ShadeGold,
  DryadGold,
  AuraGold,
  SalamanderGold,
  GnomeGold,
  JinnGold,
  UndineGold,
  WispSilver,
  ShadeSilver,
  DryadSilver,
  AuraSilver,
  SalamanderSilver,
  GnomeSilver,
  JinnSilver,
  UndineSilver
]

export const AllCoinsByForgeCode: { [code: string]: Item } = {
  '1': WispGold,
  '2': ShadeGold,
  '3': DryadGold,
  '4': AuraGold,
  '5': SalamanderGold,
  '6': GnomeGold,
  '7': JinnGold,
  '8': UndineGold,
  '9': WispSilver,
  '10': ShadeSilver,
  '11': DryadSilver,
  '12': AuraSilver,
  '13': SalamanderSilver,
  '14': GnomeSilver,
  '15': JinnSilver,
  '16': UndineSilver
}

export const AllCoinsById: { [id: string]: Item } = Object.fromEntries(AllCoins.map((coin) => [coin.id, coin]))

export * from './AuraGold'
export * from './AuraSilver'
export * from './DryadGold'
export * from './DryadSilver'
export * from './GnomeGold'
export * from './GnomeSilver'
export * from './JinnGold'
export * from './JinnSilver'
export * from './SalamanderGold'
export * from './SalamanderSilver'
export * from './ShadeGold'
export * from './ShadeSilver'
export * from './UndineGold'
export * from './UndineSilver'
export * from './WispGold'
export * from './WispSilver'
