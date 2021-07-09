import { Material, MaterialCategory } from 'model/Materials'
import { DragonScales, FishScales, LizardScales, SnakeScales } from 'model/Materials/Scales'

export const Scales: MaterialCategory = 'Scales'

export const AllScales: Material[] = [FishScales, LizardScales, SnakeScales, DragonScales]

export const AllScalesByForgeCode: { [code: string]: Material } = {
  '28': FishScales,
  '29': LizardScales,
  '30': SnakeScales,
  '31': DragonScales
}

export const AllScalesById: { [id: string]: Material } = Object.fromEntries(
  AllScales.map((scales) => [scales.id, scales])
)

export * from './DragonScales'
export * from './FishScales'
export * from './LizardScales'
export * from './SnakeScales'
