import { Dryad as DryadCard } from 'model/Cards/Element'
import { Dryad, taint } from 'model/Essences'
import { Material, MaterialCategory } from 'model/Materials'
import {
  AshWood,
  BaobabWood,
  DiorWood,
  EbonyWood,
  FossilWood,
  HollyWood,
  MapleWood,
  OakWood
} from 'model/Materials/Wood'
import { TemperingProject } from 'model/Projects'

export const Wood: MaterialCategory = 'Wood'

export function activateWood(project: TemperingProject) {
  taint(project, Dryad)

  if (project.energy >= 8) {
    project.cards.pending = DryadCard
  }
}

export const AllWoods: Material[] = [
  OakWood,
  HollyWood,
  BaobabWood,
  EbonyWood,
  MapleWood,
  DiorWood,
  AshWood,
  FossilWood
]

export const AllWoodsByForgeCode: { [code: string]: Material } = {
  '12': OakWood,
  '13': HollyWood,
  '14': BaobabWood,
  '15': EbonyWood,
  '16': MapleWood,
  '17': DiorWood,
  '18': AshWood,
  '19': FossilWood
}

export const AllWoodsById: { [id: string]: Material } = Object.fromEntries(AllWoods.map((wood) => [wood.id, wood]))

export * from './AshWood'
export * from './BaobabWood'
export * from './DiorWood'
export * from './EbonyWood'
export * from './FossilWood'
export * from './HollyWood'
export * from './MapleWood'
export * from './OakWood'
