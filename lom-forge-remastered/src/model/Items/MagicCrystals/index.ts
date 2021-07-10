import { Item, ItemCategory } from 'model/Items'
import { ChaosCrystal, GlowCrystal, MoonCrystal, SunCrystal } from 'model/Items/MagicCrystals'

export const MagicCrystals: ItemCategory = 'Magic Crystals'

export const AllMagicCrystals: Item[] = [SunCrystal, MoonCrystal, GlowCrystal, ChaosCrystal]

export const AllMagicCrystalsByForgeCode: { [code: string]: Item } = {
  '21': SunCrystal,
  '22': MoonCrystal,
  '23': GlowCrystal,
  '24': ChaosCrystal
}

export const AllMagicCrystalsById: { [id: string]: Item } = Object.fromEntries(
  AllMagicCrystals.map((magicCrystal) => [magicCrystal.id, magicCrystal])
)

export * from './ChaosCrystal'
export * from './GlowCrystal'
export * from './MoonCrystal'
export * from './SunCrystal'
