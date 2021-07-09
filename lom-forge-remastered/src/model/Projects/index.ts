import { activateCards, CardContext, pushCards, resetVolatileCards, setWorldCard } from 'model/Cards'
import { ArmorAttributes, ArmorEquipment, WeaponAttributes, WeaponEquipment } from 'model/Equipment'
import { EssencesContext, increaseRemainingEssences } from 'model/Essences'
import { ImmunitiesContext } from 'model/Immunities'
import { Item } from 'model/Items'
import { MasterMovesContext } from 'model/MasterMoves'
import { Material } from 'model/Materials'
import { Special } from 'model/Specials'
import { calculateFinalStats, resetStatLimits, StatsContext } from 'model/Stats'

type Project = StatsContext &
  EssencesContext &
  CardContext & {
    material: Material
    price: number
  }

export const WeaponProjectType = 'Weapon'
export const ArmorProjectType = 'Armor'

export type WeaponProject = Project &
  MasterMovesContext & {
    type: 'Weapon'
    equipment: WeaponEquipment
    attributes: WeaponAttributes
    power: number
  }

export type ArmorProject = Project &
  ImmunitiesContext & {
    type: 'Armor'
    equipment: ArmorEquipment
    attributes: ArmorAttributes
    special?: Special
  }

export type TemperingProject = WeaponProject | ArmorProject

function resetAttributes(project: TemperingProject) {
  switch (project.type) {
    case WeaponProjectType:
      project.attributes = { ...project.material.weaponAttributes }
      break
    case ArmorProjectType:
      project.attributes = { ...project.material.armorAttributes }
      break
  }
}

function resetResistances(project: TemperingProject) {
  project.resistances = { ...project.material.resistances }
}

function activateEquipment(project: TemperingProject) {
  if (project.equipment.activate) {
    switch (project.type) {
      case WeaponProjectType:
        project.equipment.activate(project)
        break
      case ArmorProjectType:
        project.equipment.activate(project)
        break
    }
  }
}

function activateMaterial(project: TemperingProject) {
  const { material } = project

  if (material?.activate) {
    material.activate(project)
  }
}

function activateItem(project: TemperingProject, item: Item) {
  if (item.activate) {
    item.activate(project)
  }
}

export function addItem(project: TemperingProject, item: Item) {
  resetStatLimits(project)
  resetVolatileCards(project)
  resetAttributes(project)
  resetResistances(project)

  activateEquipment(project)

  setWorldCard(project)

  project.energy = item.energy

  activateMaterial(project)
  activateItem(project, item)

  pushCards(project)

  activateCards(project)

  increaseRemainingEssences(project)

  calculateFinalStats(project)
}
