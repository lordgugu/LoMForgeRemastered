import { CardProps, MysticPowerSlot, World } from 'model/Cards'
import { ArmorAttributes, ArmorProps, MasterMoveSlot, WeaponAttributes, WeaponProps } from 'model/Equipment'
import { EssenceProps, Levels, Markers, PotentialGrowth, Resistances } from 'model/Essences'
import { ItemProps } from 'model/Items'
import { MasterMove } from 'model/MasterMoves'
import { MaterialProps } from 'model/Materials'
import { SpecialAbility } from 'model/SpecialAbilities'
import { resetStatLimits, StatProps } from 'model/Stats'

export type Immunity =
  | 'poison'
  | 'darkness'
  | 'paralysis'
  | 'confusion'
  | 'flameburst'
  | 'sleep'
  | 'petrification'
  | 'freeze'

type CommonProjectProps = StatProps &
  EssenceProps & {
    material: MaterialProps
    sticky: boolean
    mysticPowers: { [key in MysticPowerSlot]?: CardProps }
    activeWorldCard?: CardProps
    price: number
  }

export type WeaponProjectProps = CommonProjectProps & {
  type: 'Weapon'
  equipment: WeaponProps
  attributes: WeaponAttributes
  power: number
  masterMoves: { [key in MasterMoveSlot]: MasterMove }
}

export type ArmorProjectProps = CommonProjectProps & {
  type: 'Armor'
  equipment: ArmorProps
  attributes: ArmorAttributes
  special?: SpecialAbility
  immunities: { [key in Immunity]: boolean }
}

export type ProjectProps = WeaponProjectProps | ArmorProjectProps

function resetVolatileMysticPowers(project: CommonProjectProps) {
  project.mysticPowers.hidden = undefined
  project.mysticPowers.leaving = undefined
  project.sticky = true
}

function resetMaterialProps(project: ProjectProps) {
  switch (project.type) {
    case 'Weapon':
      project.attributes = { ...project.material.weaponAttributes }
      break
    case 'Armor':
      project.attributes = { ...project.material.armorAttributes }
      break
  }

  project.resistances = project.material.resistances
}

function activateEquipment(project: ProjectProps) {
  if (project.equipment.activate) {
    switch (project.type) {
      case 'Weapon':
        project.equipment.activate(project)
        break
      case 'Armor':
        project.equipment.activate(project)
        break
    }
  }
}

function setActiveWorldCard(project: ProjectProps) {
  const slots = [
    project.mysticPowers.bottom,
    project.mysticPowers.middle,
    project.mysticPowers.top,
    project.mysticPowers.hidden
  ]

  project.activeWorldCard = slots.find((slot) => slot?.category === World)
}

function activateMaterialCategory(project: ProjectProps) {
  const { category } = project.material

  if (category?.activate) {
    category.activate(project)
  }
}

export function addItem(project: ProjectProps, item: ItemProps) {
  resetStatLimits(project)
  resetVolatileMysticPowers(project)
  resetMaterialProps(project)

  activateEquipment(project)

  setActiveWorldCard(project)

  project.energy = item.energy

  activateMaterialCategory(project)
}
