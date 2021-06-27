import { Weapon } from 'model/Weapons'
import {
  Caduceus,
  ChaoticAvenger,
  Demonicide,
  DoubleShot,
  DragonSlayer,
  Electrosceptre,
  ElvenArcher,
  FlameTongue,
  FlamingArrow,
  GameOfDeath,
  GoldenTouch,
  Gungnir,
  HandOfMidas,
  Icicle,
  Jump,
  LunarShot,
  MagicalShot,
  MagmaHammer,
  MedusaArrow,
  Mjolnir,
  Moonlight,
  PhoenixFalling,
  PoisonBlade,
  QuakeHammer,
  QuickBlade,
  Ragnarok,
  RedDream,
  Shot,
  SinisterBlade,
  SledgeHammer,
  SolarFlare,
  SpearOfLight,
  Sunlight,
  Thrust,
  Treefeller,
  Trident,
  Uppercut,
  Vampsword,
  Woodchopper
} from '.'

export type SlotNumber = 1 | 2 | 3

export class PlungeAttack<Slot extends SlotNumber> {
  readonly slot: Slot
  readonly name: string
  readonly weapons: Weapon[]
  readonly description: string
  readonly requiredCards: string[]

  constructor(props: { slot: Slot; name: string; weapons: Weapon[]; description: string; requiredCards: string[] }) {
    this.name = props.name
    this.weapons = props.weapons
    this.description = props.description
    this.slot = props.slot
    this.requiredCards = props.requiredCards
  }
}

export const TopSlotPlungeAttacks: PlungeAttack<1>[] = [
  Thrust,
  Shot,
  Caduceus,
  ChaoticAvenger,
  FlamingArrow,
  Gungnir,
  Icicle,
  MagicalShot,
  MedusaArrow,
  PhoenixFalling,
  SolarFlare,
  SpearOfLight,
  Trident
]

export const MiddleSlotPlunges: PlungeAttack<2>[] = [
  Uppercut,
  DoubleShot,
  DragonSlayer,
  ElvenArcher,
  FlameTongue,
  GameOfDeath,
  HandOfMidas,
  LunarShot,
  PoisonBlade,
  QuickBlade,
  Sunlight,
  Vampsword
]

export const BottomSlotPlunges: PlungeAttack<3>[] = [
  Jump,
  Demonicide,
  Electrosceptre,
  GoldenTouch,
  MagmaHammer,
  Mjolnir,
  Moonlight,
  QuakeHammer,
  Ragnarok,
  RedDream,
  SinisterBlade,
  SledgeHammer,
  Treefeller,
  Woodchopper
]
