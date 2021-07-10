import { Item, ItemCategory } from 'model/Items'
import { Ash, GraveDirt, KnockoutDust, PoisonPowder, Rust, SleepyPowder, Sulfur } from 'model/Items/Powders'

export const Powders: ItemCategory = 'Powders'

export const AllPowders: Item[] = [Sulfur, PoisonPowder, SleepyPowder, KnockoutDust, Rust, GraveDirt, Ash]

export const AllPowdersByForgeCode: { [code: string]: Item } = {
  '107': Sulfur,
  '108': PoisonPowder,
  '109': SleepyPowder,
  '110': KnockoutDust,
  '111': Rust,
  '112': GraveDirt,
  '113': Ash
}

export const AllPowdersById: { [id: string]: Item } = Object.fromEntries(
  AllPowders.map((powder) => [powder.id, powder])
)

export * from './Ash'
export * from './GraveDirt'
export * from './KnockoutDust'
export * from './PoisonPowder'
export * from './Rust'
export * from './SleepyPowder'
export * from './Sulfur'
