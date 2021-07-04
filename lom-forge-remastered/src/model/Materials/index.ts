import { ArmorAttributes, WeaponAttributes } from 'model/Equipment'
import { Resistances } from 'model/Essences'
import {
  Adamantite,
  AltenaAlloy,
  AltenaFelt,
  AnimalBone,
  AnimalHide,
  AnkhRock,
  AshWood,
  BaobabWood,
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
  ForsenaIron,
  Fossil,
  FossilWood,
  Fullmetal,
  GaeussTears,
  GatorSkin,
  GranzSteel,
  HalleyRock,
  HollyWood,
  IshePlatinum,
  Ivory,
  JacobiniRock,
  JuddHemp,
  LapisLazuli,
  LizardScales,
  LorantSilver,
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
  VinekRock,
  VizelGold,
  WendelSilver
} from 'model/Materials'
import { ProjectProps } from 'model/Projects'

export type MaterialCategory =
  | {
      readonly originalName: 'METAL' | 'WOOD' | 'STONE' | 'HIDE' | 'SCALES' | 'BONE' | 'FABRIC' | 'AEROLITE'
      readonly remasteredName?: string
      readonly activate?: (project: ProjectProps) => void
    }
  | undefined

export type MaterialProps = {
  readonly originalName: string
  readonly remasteredName?: string
  readonly category: MaterialCategory
  readonly growthControl: number
  readonly weaponAttributes: WeaponAttributes
  readonly armorAttributes: ArmorAttributes
  readonly resistances: Resistances
  readonly priceCoefficient: number
}

export const Materials: { readonly [key: string]: MaterialProps } = {
  // Metal
  '1': MenosBronze,
  '2': ForsenaIron,
  '3': GranzSteel,
  '4': LorantSilver,
  '5': WendelSilver,
  '6': VizelGold,
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
  '23': GaeussTears,

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
