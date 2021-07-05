import { decreaseEssence, Salamander } from 'model/Essences'
import { TemperingProject } from 'model/Projects'

export function activateAerolite(project: TemperingProject) {
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
