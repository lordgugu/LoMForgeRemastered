import { Material, MaterialCategory } from 'model/Materials'
import {
  AltenaAlloy,
  BeiserGold,
  GranzSteel,
  IshePlatinum,
  LaurentSilver,
  LorimarIron,
  MaiaLead,
  MenosBronze,
  Orihalcon,
  ValsenaIron,
  WendelSilver
} from 'model/Materials/Metal'

export const Metal: MaterialCategory = 'Metal'

export const AllMetals: Material[] = [
  MenosBronze,
  ValsenaIron,
  GranzSteel,
  LaurentSilver,
  WendelSilver,
  BeiserGold,
  IshePlatinum,
  LorimarIron,
  AltenaAlloy,
  MaiaLead,
  Orihalcon
]

export const AllMetalsByForgeCode: { [code: string]: Material } = {
  '1': MenosBronze,
  '2': ValsenaIron,
  '3': GranzSteel,
  '4': LaurentSilver,
  '5': WendelSilver,
  '6': BeiserGold,
  '7': IshePlatinum,
  '8': LorimarIron,
  '9': AltenaAlloy,
  '10': MaiaLead,
  '11': Orihalcon
}

export const AllMetalsById: { [id: string]: Material } = Object.fromEntries(AllMetals.map((metal) => [metal.id, metal]))

export * from './AltenaAlloy'
export * from './BeiserGold'
export * from './GranzSteel'
export * from './IshePlatinum'
export * from './LaurentSilver'
export * from './LorimarIron'
export * from './MaiaLead'
export * from './MenosBronze'
export * from './Orihalcon'
export * from './ValsenaIron'
export * from './WendelSilver'
