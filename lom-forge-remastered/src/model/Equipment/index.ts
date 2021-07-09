import {
  Armor,
  ArmorAttribute,
  ArmorEquipment,
  Boots,
  Gauntlet,
  Hat,
  Hauberk,
  Helm,
  Magic,
  Mantle,
  Pendant,
  Pierce,
  Ring,
  Robe,
  Shield,
  Shoes,
  Slash,
  Strike
} from 'model/Equipment'
import { AllWeaponsByForgeCode, Force, Heavy, Sharp, Tech, Weapon, WeaponAttribute } from 'model/Equipment/Weapons'
import { ArmorProjectType, TemperingProject, WeaponProjectType } from 'model/Projects'

export type Equipment = Weapon | ArmorEquipment

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

export function plus50Percent(project: TemperingProject, attribute: WeaponAttribute | ArmorAttribute) {
  modifyAttribute(project, attribute, (value) => Math.min(255, Math.trunc((value * 3) / 2)))
}

export const Equipments: { readonly [code: string]: Equipment } = {
  ...AllWeaponsByForgeCode,

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
