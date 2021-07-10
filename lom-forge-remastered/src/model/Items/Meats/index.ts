import { Item, ItemCategory } from 'model/Items'
import {
  AnimalMeat,
  BirdMeat,
  BugMeat,
  DemonMeat,
  DragonSteak,
  LizardMeat,
  MagicalMeat,
  MorphMeat,
  OddMeat,
  RottenMeat
} from 'model/Items/Meats'
import { FishMeat } from './FishMeat'

export const Meats: ItemCategory = 'Meats'

export const AllMeats: Item[] = [
  AnimalMeat,
  BugMeat,
  LizardMeat,
  FishMeat,
  BirdMeat,
  MorphMeat,
  DemonMeat,
  DragonSteak,
  OddMeat,
  MagicalMeat,
  RottenMeat
]

export const AllMeatsByForgeCode: { [code: string]: Item } = {
  '70': AnimalMeat,
  '121': BugMeat,
  '122': LizardMeat,
  '123': FishMeat,
  '124': BirdMeat,
  '125': MorphMeat,
  '126': DemonMeat,
  '127': DragonSteak,
  '128': OddMeat,
  '129': MagicalMeat,
  '130': RottenMeat
}

export const AllMeatsById: { [id: string]: Item } = Object.fromEntries(AllMeats.map((meat) => [meat.id, meat]))

export * from './AnimalMeat'
export * from './BirdMeat'
export * from './BugMeat'
export * from './DemonMeat'
export * from './DragonSteak'
export * from './LizardMeat'
export * from './MagicalMeat'
export * from './MorphMeat'
export * from './OddMeat'
export * from './RottenMeat'
