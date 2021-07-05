import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { TemperingProject } from 'model/Projects'

export function activateWood(project: TemperingProject) {
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
