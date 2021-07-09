import { decreaseEssence, Salamander } from 'model/Essences'
import { Material, MaterialCategory } from 'model/Materials'
import {
  AnkhRock,
  BiellaRock,
  HalleyRock,
  JacobiniRock,
  NemesisRock,
  SwifteRock,
  TuttleRock,
  VinekRock
} from 'model/Materials/Aerolite'
import { TemperingProject } from 'model/Projects'

export const Aerolite: MaterialCategory = 'Aerolite'

export function activateAerolite(project: TemperingProject) {
  decreaseEssence(project, Salamander)
}

export const AllAerolites: Material[] = [
  JacobiniRock,
  HalleyRock,
  AnkhRock,
  VinekRock,
  TuttleRock,
  NemesisRock,
  BiellaRock,
  SwifteRock
]

export const AllAerolitesByForgeCode: { [code: string]: Material } = {
  '40': JacobiniRock,
  '41': HalleyRock,
  '42': AnkhRock,
  '43': VinekRock,
  '44': TuttleRock,
  '45': NemesisRock,
  '46': BiellaRock,
  '47': SwifteRock
}

export const AllAerolitesById: { [id: string]: Material } = Object.fromEntries(
  AllAerolites.map((aerolite) => [aerolite.id, aerolite])
)

export * from './AnkhRock'
export * from './BiellaRock'
export * from './HalleyRock'
export * from './JacobiniRock'
export * from './NemesisRock'
export * from './SwifteRock'
export * from './TuttleRock'
export * from './VinekRock'
