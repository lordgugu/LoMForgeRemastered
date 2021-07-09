import { Entity } from 'model/Common'
import { Resistances } from 'model/Essences'
import { EquipmentAttributes } from 'model/Gear/Equipment'
import { WeaponAttributes } from 'model/Gear/Weapons'
import {
  Adamantite,
  AltenaAlloy,
  AltenaFelt,
  AnimalBone,
  AnimalHide,
  AnkhRock,
  AshWood,
  BaobabWood,
  BeiserGold,
  BiellaRock,
  CentaurHide,
  Coral,
  CursedBone,
  DiorWood,
  DragonScales,
  DragonSkin,
  EbonyWood,
  Emerald,
  FishScales,
  Fossil,
  FossilWood,
  Fullmetal,
  GaiasTears,
  GatorSkin,
  GranzSteel,
  HalleyRock,
  HollyWood,
  IshePlatinum,
  Ivory,
  JacobiniRock,
  JuddHemp,
  LapisLazuli,
  LaurentSilver,
  LizardScales,
  LorimarIron,
  MaiaLead,
  MapleWood,
  Marble,
  MenosBronze,
  NemesisRock,
  OakWood,
  Obsidian,
  Orihalcon,
  Pearl,
  PedanStone,
  Shell,
  SnakeScales,
  SultansSilk,
  SwifteRock,
  ToppleCotton,
  TortoiseShell,
  TuttleRock,
  ValsenaIron,
  VinekRock,
  WendelSilver
} from 'model/Materials'
import { TemperingProject } from 'model/Projects'

export type MaterialCategory =
  | 'Metal'
  | 'Wood'
  | 'Stone'
  | 'Hide'
  | 'Scales'
  | 'Bone'
  | 'Fabric'
  | 'Aerolite'
  | undefined

export const Metal: MaterialCategory = 'Metal'
export const Wood: MaterialCategory = 'Wood'
export const Stone: MaterialCategory = 'Stone'
export const Hide: MaterialCategory = 'Hide'
export const Scales: MaterialCategory = 'Scales'
export const Bone: MaterialCategory = 'Bone'
export const Fabric: MaterialCategory = 'Fabric'
export const Aerolite: MaterialCategory = 'Aerolite'
export const None: MaterialCategory = undefined

export type Material = Entity & {
  readonly category: MaterialCategory
  readonly growthControl: number
  readonly weaponAttributes: WeaponAttributes
  readonly equipmentAttributes: EquipmentAttributes
  readonly resistances: Resistances
  readonly priceCoefficient: number
  readonly activate?: (project: TemperingProject) => void
}

export const AllMaterials: { readonly [key: string]: Material } = {
  // Metal
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
  '11': Orihalcon,

  // Wood
  '12': OakWood,
  '13': HollyWood,
  '14': BaobabWood,
  '15': EbonyWood,
  '16': MapleWood,
  '17': DiorWood,
  '18': AshWood,
  '19': FossilWood,

  // Stone
  '20': Marble,
  '21': Obsidian,
  '22': PedanStone,
  '23': GaiasTears,

  // Hide
  '24': AnimalHide,
  '25': GatorSkin,
  '26': CentaurHide,
  '27': DragonSkin,

  // Scales
  '28': FishScales,
  '29': LizardScales,
  '30': SnakeScales,
  '31': DragonScales,

  // Bone
  '32': AnimalBone,
  '33': Ivory,
  '34': CursedBone,
  '35': Fossil,

  // Fabric
  '36': ToppleCotton,
  '37': SultansSilk,
  '38': JuddHemp,
  '39': AltenaFelt,

  // Aerolite
  '40': JacobiniRock,
  '41': HalleyRock,
  '42': AnkhRock,
  '43': VinekRock,
  '44': TuttleRock,
  '45': NemesisRock,
  '46': BiellaRock,
  '47': SwifteRock,

  // None
  '48': Adamantite,
  '49': Fullmetal,
  '50': Coral,
  '51': TortoiseShell,
  '52': Shell,
  '53': Emerald,
  '54': Pearl,
  '55': LapisLazuli
}

export * from './Aerolite'
export * from './Bone'
export * from './Fabric'
export * from './Hide'
export * from './Metal'
export * from './None'
export * from './Scales'
export * from './Stone'
export * from './Wood'
