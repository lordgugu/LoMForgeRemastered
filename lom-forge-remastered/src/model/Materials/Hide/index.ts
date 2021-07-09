import { Material, MaterialCategory } from 'model/Materials'
import { AnimalHide, CentaurHide, DragonSkin, GatorSkin } from 'model/Materials/Hide'

export const Hide: MaterialCategory = 'Hide'

export const AllHides: Material[] = [AnimalHide, GatorSkin, CentaurHide, DragonSkin]

export const AllHidesByForgeCode: { [code: string]: Material } = {
  '24': AnimalHide,
  '25': GatorSkin,
  '26': CentaurHide,
  '27': DragonSkin
}

export const AllHidesById: { [id: string]: Material } = Object.fromEntries(AllHides.map((hide) => [hide.id, hide]))

export * from './AnimalHide'
export * from './CentaurHide'
export * from './DragonSkin'
export * from './GatorSkin'
