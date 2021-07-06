import { Card, CardSlot, World } from 'model/Cards'
import { ArmorAttributes, ArmorEquipment, MasterMoveSlot, WeaponAttributes, WeaponEquipment } from 'model/Equipment'
import { Essences } from 'model/Essences'
import { Immunities } from 'model/Immunities'
import { Item } from 'model/Items'
import { MasterMove } from 'model/MasterMoves'
import { Material } from 'model/Materials'
import { Special } from 'model/Specials'
import { resetStatLimits, Stats } from 'model/Stats'

type Project = Stats &
  Essences & {
    material: Material
    sticky: boolean
    cards: { [slot in CardSlot]?: Card }
    worldCard?: Card
    price: number
  }

export const WeaponProjectType = 'Weapon'
export const ArmorProjectType = 'Armor'

export type WeaponProject = Project & {
  type: 'Weapon'
  equipment: WeaponEquipment
  attributes: WeaponAttributes
  power: number
  masterMoves: { [key in MasterMoveSlot]: MasterMove }
}

export type ArmorProject = Project &
  Immunities & {
    type: 'Armor'
    equipment: ArmorEquipment
    attributes: ArmorAttributes
    special?: Special
  }

export type TemperingProject = WeaponProject | ArmorProject

function resetVolatileMysticPowers(project: Project) {
  project.cards.hidden = undefined
  project.cards.leaving = undefined
  project.sticky = true
}

function resetMaterialProperties(project: TemperingProject) {
  switch (project.type) {
    case WeaponProjectType:
      project.attributes = { ...project.material.weaponAttributes }
      break
    case ArmorProjectType:
      project.attributes = { ...project.material.armorAttributes }
      break
  }

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

function setActiveWorldCard(project: TemperingProject) {
  const { bottom, middle, top, hidden } = project.cards

  project.worldCard = Array.of(bottom, middle, top, hidden).find((slot) => slot?.category === World)
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
  resetVolatileMysticPowers(project)
  resetMaterialProperties(project)

  activateEquipment(project)
  setActiveWorldCard(project)

  project.energy = item.energy

  activateMaterial(project)
  activateItem(project, item)
}
