import { activateCards, CardContext, pushCards, resetVolatileCards, setWorldCard } from 'model/Cards'
import { EssencesContext, increaseRemainingEssences } from 'model/Essences'
import { Equipment, EquipmentAttributes } from 'model/Gear/Equipment'
import { Weapon, WeaponAttributes } from 'model/Gear/Weapons'
import { ImmunitiesContext } from 'model/Immunities'
import { Item } from 'model/Items'
import { MasterMovesContext } from 'model/MasterMoves'
import { Material } from 'model/Materials'
import { Special } from 'model/Specials'
import { calculateFinalStats, resetStatLimits, StatsContext } from 'model/Stats'

type ProjectContext = StatsContext &
  EssencesContext &
  CardContext & {
    material: Material
    price: number
  }

export const WeaponProject = 'Weapon'
export const EquipmentProject = 'Equipment'

export type TemperedWeapon = ProjectContext &
  MasterMovesContext & {
    type: 'Weapon'
    equipment: Weapon
    attributes: WeaponAttributes
    power: number
  }

export type AlteredArmor = ProjectContext &
  ImmunitiesContext & {
    type: 'Equipment'
    equipment: Equipment
    attributes: EquipmentAttributes
    special?: Special
  }

export type TemperingProject = TemperedWeapon | AlteredArmor

function resetAttributes(project: TemperingProject) {
  switch (project.type) {
    case WeaponProject:
      project.attributes = { ...project.material.weaponAttributes }

      break
    case EquipmentProject:
      project.attributes = { ...project.material.equipmentAttributes }
      break
  }
}

function resetResistances(project: TemperingProject) {
  project.resistances = { ...project.material.resistances }
}

function activateEquipment(project: TemperingProject) {
  if (project.equipment.activate) {
    switch (project.type) {
      case WeaponProject:
        project.equipment.activate(project)
        break
      case EquipmentProject:
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
