import {
  Acid,
  AngelFeather,
  AngryEye,
  AnyMeat,
  Applesocks,
  Apricat,
  AromaOil, Ash, AuraGold,
  AuraSilver, BakedRoach, Bellgrapes,
  BigSeed, BlackenedBat, BlankEye,
  Boarmelon,
  Bumpkin,
  Cabadillo,
  ChaosCrystal,
  CherryBombs,
  Citrisquid,
  ClearFeather,
  Conchurnip,
  Cornflower,
  CreepyEye,
  CrookedSeed,
  DangerousEye,
  Dialaurel,
  Diceberry,
  DragonBlood,
  DragonsBreath,
  DryadGold,
  DryadSilver, EarOfWheat, EarthStone, Electricity, Ether,
  FireStone,
  FishyFruit,
  FlamingQuill,
  FlatSeed,
  Garlicrown,
  GhostsHowl,
  GiantsHorn,
  GlowCrystal,
  GnomeGold,
  GnomeSilver,
  GoldClover, GraveDirt, GreenballBun, Hairball, HealingClaw,
  HeartMint,
  HolyWater,
  HoneyOnion,
  JinnGold,
  JinnSilver, KnockoutDust, Lilipods,
  LittleEye,
  LongSeed,
  LoquatShoes,
  Mangoelephant,
  MaskedPotato,
  Mercury, MessyScroll, MirrorPiece, MoonCrystal, Moss, MothWing,
  MushInABox, Needle, Needlettuce,
  OblongSeed,
  OrangeOpus,
  Orcaplant,
  PeachPuppy,
  PearOHeels,
  PineOClock,
  PoisonFang, PoisonPowder, RavenFeather,
  Rhinoloupe,
  RocketPapaya,
  RoundSeed, Rust, SalaGold,
  SalaSilver,
  Scissors,
  ShadeGold,
  ShadeSilver,
  SharpClaw,
  SillyEye,
  SleepyEye, SleepyPowder, SmallSeed,
  SpadeBasil,
  SpinyCarrot,
  SpinySeed,
  Springanana,
  Squalphin,
  StinkyBreath, Sulpher, SunCrystal,
  SweetMoai, TakoBug, Toadstoolshed,
  UndineGold,
  UndineSilver,
  VampireFang,
  VirginsSigh, WadOfWool, WaterStone,
  Whalamato,
  WhiteFeather,
  WickedEye,
  WindStone,
  WispGold,
  WispSilver,
  ZombieClaw
} from 'model/Items'

export type ItemCategory =
  | {
      originalName:
        | 'COINS'
        | 'M.STONES'
        | 'M.CRYSTALS'
        | 'SEEDS'
        | 'PRODUCE'
        | 'MEATS'
        | 'FANG/CLAW'
        | 'EYES'
        | 'FEATHERS'
        | 'BOTTLES'
        | 'VIALS'
        | 'URNS'
        | 'PELLETS'
        | 'POWDERS'
        | 'POUCH'
      remasteredName?: string
    }
  | undefined

export type ItemProps = {
  category: ItemCategory
  originalName: string
  remasteredName?: string
  energy: number
}

export const Items: { [key: string]: ItemProps } = {
  // Coins
  '1': WispGold,
  '2': ShadeGold,
  '3': DryadGold,
  '4': AuraGold,
  '5': SalaGold,
  '6': GnomeGold,
  '7': JinnGold,
  '8': UndineGold,
  '9': WispSilver,
  '10': ShadeSilver,
  '11': DryadSilver,
  '12': AuraSilver,
  '13': SalaSilver,
  '14': GnomeSilver,
  '15': JinnSilver,
  '16': UndineSilver,

  // Magic Stones
  '17': FireStone,
  '18': EarthStone,
  '19': WindStone,
  '20': WaterStone,

  // Magic Crystals
  '21': SunCrystal,
  '22': MoonCrystal,
  '23': GlowCrystal,
  '24': ChaosCrystal,

  // Seeds
  '25': RoundSeed,
  '26': OblongSeed,
  '27': CrookedSeed,
  '28': BigSeed,
  '29': SmallSeed,
  '30': LongSeed,
  '31': FlatSeed,
  '32': SpinySeed,

  // Produce
  '33': Bellgrapes,
  '34': Diceberry,
  '35': Mangoelephant,
  '36': LoquatShoes,
  '37': PearOHeels,
  '38': Squalphin,
  '39': Citrisquid,
  '40': Springanana,
  '41': PeachPuppy,
  '42': Apricat,
  '43': Applesocks,
  '44': Whalamato,
  '45': PineOClock,
  '46': FishyFruit,
  '47': Boarmelon,
  '48': Rhinoloupe,
  '49': Orcaplant,
  '50': Garlicrown,
  '51': HoneyOnion,
  '52': SweetMoai,
  '53': SpinyCarrot,
  '54': Conchurnip,
  '55': Cornflower,
  '56': Cabadillo,
  '57': Needlettuce,
  '58': CherryBombs,
  '59': MaskedPotato,
  '60': Lilipods,
  '61': RocketPapaya,
  '62': OrangeOpus,
  '63': Bumpkin,
  '64': HeartMint,
  '65': SpadeBasil,
  '66': Dialaurel,
  '67': GoldClover,
  '68': MushInABox,
  '69': Toadstoolshed,

  // Meats
  '70': AnyMeat,

  // Fang/Claw
  '71': SharpClaw,
  '72': PoisonFang,
  '73': GiantsHorn,
  '74': Scissors,
  '75': HealingClaw,
  '76': ZombieClaw,
  '77': VampireFang,

  // Eyes
  '78': LittleEye,
  '79': SleepyEye,
  '80': SillyEye,
  '81': DangerousEye,
  '82': AngryEye,
  '83': BlankEye,
  '84': WickedEye,
  '85': CreepyEye,

  // Feathers
  '86': AngelFeather,
  '87': RavenFeather,
  '88': ClearFeather,
  '89': MothWing,
  '90': FlamingQuill,
  '91': WhiteFeather,

  // Bottles
  '92': AromaOil,
  '93': DragonBlood,
  '94': Acid,
  '95': HolyWater,
  '96': Ether,

  // Vials
  '97': Mercury,
  '98': StinkyBreath,
  '99': GhostsHowl,
  '100': DragonsBreath,
  '101': VirginsSigh,

  // Urns
  '102': Electricity,
  '103': Moss,
  '104': EarOfWheat,

  // Pellets
  '105': BakedRoach,
  '106': BlackenedBat,

  // Powders
  '107': Sulpher,
  '108': PoisonPowder,
  '109': SleepyPowder,
  '110': KnockoutDust,
  '111': Rust,
  '112': GraveDirt,
  '113': Ash,

  // Pouch
  '114': Hairball,
  '115': Needle,
  '116': MirrorPiece,
  '117': WadOfWool,
  '118': MessyScroll,

  // None
  '119': GreenballBun,
  '120': TakoBug
}

export * from './Bottles'
export * from './Coins'
export * from './Eyes'
export * from './FangClaw'
export * from './Feathers'
export * from './MagicCrystals'
export * from './MagicStones'
export * from './Meats'
export * from './None'
export * from './Pellets'
export * from './Pouch'
export * from './Powders'
export * from './Produce'
export * from './Seeds'
export * from './Urns'
export * from './Vials'

