import {
  Armor,
  ArmorProps,
  Axe,
  Boots,
  Bow,
  Flail,
  Gauntlet,
  Glove,
  Hammer,
  Hat,
  Hauberk,
  Helm,
  Knife,
  Mantle,
  Pendant,
  Ring,
  Robe,
  Shield,
  Shoes,
  Spear,
  Staff,
  Sword,
  TwoHandedAxe,
  TwoHandedSword,
  WeaponProps
} from 'model/Equipment'

export type EquipmentProps = WeaponProps | ArmorProps

export const Equipment: { readonly [key: string]: EquipmentProps } = {
  // Weapons
  '1': Knife,
  '2': Sword,
  '3': Axe,
  '4': TwoHandedSword,
  '5': TwoHandedAxe,
  '6': Hammer,
  '7': Spear,
  '8': Staff,
  '9': Glove,
  '10': Flail,
  '11': Bow,

  // Armor
  '12': Shield,
  '13': Helm,
  '14': Hat,
  '15': Hauberk,
  '16': Robe,
  '17': Gauntlet,
  '18': Ring,
  '19': Boots,
  '20': Shoes,
  '21': Armor,
  '22': Mantle,
  '23': Pendant
}

export * from './Armors'
export * from './Weapons'
