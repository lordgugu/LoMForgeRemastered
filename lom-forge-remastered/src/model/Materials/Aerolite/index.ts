import { decreaseEssence, Salamander } from 'model/Essences'
import { MaterialCategory } from 'model/Materials'
import { ProjectProps } from 'model/Projects'

export const Aerolite: MaterialCategory = {
  originalName: 'AEROLITE',
  activate: activationCode
}

function activationCode(project: ProjectProps) {
  decreaseEssence(project, Salamander)
}

export * from './AnkhRock'
export * from './BiellaRock'
export * from './HalleyRock'
export * from './JacobiniRock'
export * from './NemesisRock'
export * from './SwifteRock'
export * from './TuttleRock'
export * from './VinekRock'
