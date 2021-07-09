import {
  AllEquipmentByForgeCode,
  Equipment,
  EquipmentAttribute,
  Magic,
  Pierce,
  Slash,
  Strike
} from 'model/Gear/Equipment'
import { AllWeaponsByForgeCode, Force, Heavy, Sharp, Tech, Weapon, WeaponAttribute } from 'model/Gear/Weapons'
import { EquipmentProject, TemperingProject, WeaponProject } from 'model/Projects'

function modify(
  project: TemperingProject,
  attribute: WeaponAttribute | EquipmentAttribute,
  modification: (value: number) => number
) {
  switch (project.type) {
    case WeaponProject:
      switch (attribute) {
        case Sharp:
        case Heavy:
        case Force:
        case Tech:
          project.attributes[attribute] = modification(project.attributes[attribute])
          break
      }
      break
    case EquipmentProject:
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

export function minus25Percent(project: TemperingProject, attribute: WeaponAttribute | EquipmentAttribute) {
  modify(project, attribute, (value) => Math.trunc(value / 4) * 3)
}

export function minus50Percent(project: TemperingProject, attribute: WeaponAttribute | EquipmentAttribute) {
  modify(project, attribute, (value) => Math.trunc(value / 2))
}

export function plus25Percent(project: TemperingProject, attribute: WeaponAttribute | EquipmentAttribute) {
  modify(project, attribute, (value) => Math.min(255, Math.trunc((value * 5) / 4)))
}

export function plus50Percent(project: TemperingProject, attribute: WeaponAttribute | EquipmentAttribute) {
  modify(project, attribute, (value) => Math.min(255, Math.trunc((value * 3) / 2)))
}

export const AllGearByForgeCode: { readonly [code: string]: Weapon | Equipment } = {
  ...AllWeaponsByForgeCode,
  ...AllEquipmentByForgeCode
}
