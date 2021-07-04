import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { MaterialCategory } from 'model/Materials'
import { ProjectProps } from 'model/Projects'

export const Wood: MaterialCategory = {
  originalName: 'WOOD',
  activate: activationCode
}

function activationCode(project: ProjectProps) {
  taint(project, Dryad)

  if (project.energy >= 8) {
    project.mysticPowers.prehidden = DryadCard
  }
}

export * from './AshWood'
export * from './BaobabWood'
export * from './DiorWood'
export * from './EbonyWood'
export * from './FossilWood'
export * from './HollyWood'
export * from './MapleWood'
export * from './OakWood'
