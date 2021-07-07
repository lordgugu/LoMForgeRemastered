import {
  Armor,
  ArmorAttribute,
  ArmorEquipment,
  Axe,
  Boots,
  Bow,
  Flail,
  Force,
  Gauntlet,
  Glove,
  Hammer,
  Hat,
  Hauberk,
  Heavy,
  Helm,
  Knife,
  Magic,
  Mantle,
  Pendant,
  Pierce,
  Ring,
  Robe,
  Sharp,
  Shield,
  Shoes,
  Slash,
  Spear,
  Staff,
  Strike,
  Sword,
  Tech,
  TwoHandedAxe,
  TwoHandedSword,
  WeaponAttribute,
  WeaponEquipment
} from 'model/Equipment'
import { ArmorProjectType, TemperingProject, WeaponProject, WeaponProjectType } from 'model/Projects'

export type Equipment = WeaponEquipment | ArmorEquipment

function modifyAttribute(
  project: TemperingProject,
  attribute: WeaponAttribute | ArmorAttribute,
  modification: (value: number) => number
) {
  switch (project.type) {
    case WeaponProjectType:
      switch (attribute) {
        case Sharp:
        case Heavy:
        case Force:
        case Tech:
          project.attributes[attribute] = modification(project.attributes[attribute])
          break
      }
      break
    case ArmorProjectType:
      switch (attribute) {
        case Strike:
        case Slash:
        case Pierce:
        case Magic:
          project.attributes[attribute] = modification(project.attributes[attribute])
          break
      }
      break
  }
}

export function minus25Percent(project: TemperingProject, attribute: WeaponAttribute | ArmorAttribute) {
  modifyAttribute(project, attribute, (value) => Math.trunc(value / 4) * 3)
}

export function minus50Percent(project: TemperingProject, attribute: WeaponAttribute | ArmorAttribute) {
  modifyAttribute(project, attribute, (value) => Math.trunc(value / 2))
}

export function plus25Percent(project: TemperingProject, attribute: WeaponAttribute | ArmorAttribute) {
  modifyAttribute(project, attribute, (value) => Math.min(255, Math.trunc((value * 5) / 4)))
}

export function plus50Percent( project: TemperingProject, attribute: WeaponAttribute | ArmorAttribute) {
  modifyAttribute(project, attribute, (value) => Math.min(255, Math.trunc((value * 3) / 2)))
}

export const Equipments: { readonly [key: string]: Equipment } = {
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
