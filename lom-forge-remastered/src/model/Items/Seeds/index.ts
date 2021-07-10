import { Item, ItemCategory } from 'model/Items'
import {
  BigSeed,
  CrookedSeed,
  FlatSeed,
  LongSeed,
  OblongSeed,
  RoundSeed,
  SmallSeed,
  SpinySeed
} from 'model/Items/Seeds'

export const Seeds: ItemCategory = 'Seeds'

export const AllSeeds: Item[] = [RoundSeed, OblongSeed, CrookedSeed, BigSeed, SmallSeed, LongSeed, FlatSeed, SpinySeed]

export const AllSeedsByForgeCode: { [code: string]: Item } = {
  '25': RoundSeed,
  '26': OblongSeed,
  '27': CrookedSeed,
  '28': BigSeed,
  '29': SmallSeed,
  '30': LongSeed,
  '31': FlatSeed,
  '32': SpinySeed
}

export const AllSeedsById: { [id: string]: Item } = Object.fromEntries(AllSeeds.map((seed) => [seed.id, seed]))

export * from './BigSeed'
export * from './CrookedSeed'
export * from './FlatSeed'
export * from './LongSeed'
export * from './OblongSeed'
export * from './RoundSeed'
export * from './SmallSeed'
export * from './SpinySeed'
