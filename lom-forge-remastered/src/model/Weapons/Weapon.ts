import { Jump, PlungeAttack, Thrust, Uppercut } from 'model/PlungeAttacks'
import { Axe, Bow, Flail, Glove, Hammer, Knife, Spear, Staff, Sword, TwoHandedAxe, TwoHandedSword } from '.'

export enum Weapon {
  None = 'None',
  Knife = 'Knife',
  Sword = 'Sword',
  Axe = 'Axe',
  TwoHandedSword = '2H Sword',
  TwoHandedAxe = '2H Axe',
  Hammer = 'Hammer',
  Spear = 'Spear',
  Staff = 'Staff',
  Glove = 'Glove',
  Flail = 'Flail',
  Bow = 'Bow'
}

export class WeaponProps {
  // Discriminator
  readonly kind: Weapon = Weapon.None

  // Factors into total weapon power
  public readonly sharpness: number = 0
  public readonly weight: number = 0
  public readonly force: number = 0
  public readonly technique: number = 0

  // Determines the minimum essence level required to display an elemental marker
  readonly markerThreshold: number = 3

  // Factors into total sale price
  readonly priceCoefficient: number = 0

  // Default plunge attcks
  readonly topPlunge: PlungeAttack<1> = Thrust
  readonly middlePlunge: PlungeAttack<2> = Uppercut
  readonly bottomPlunge: PlungeAttack<3> = Jump

  constructor(init?: Partial<WeaponProps>) {
    Object.assign(this, init)
  }
}

export const AllWeapons: WeaponProps[] = [
  Knife,
  Sword,
  Axe,
  TwoHandedSword,
  TwoHandedAxe,
  Hammer,
  Spear,
  Staff,
  Glove,
  Flail,
  Bow
]
