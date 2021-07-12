import {
  Bottom,
  CardContext,
  CardSlot,
  Hidden,
  Leaving,
  Middle,
  pushCards,
  resetVolatileCards,
  resolveWorldPower,
  Top
} from 'model/Cards'
import { EssencesContext, increaseRemainingEssences, Markers, totalLevels } from 'model/Essences'
import { Equipment, EquipmentAttributes, Magic, Pierce, Slash, Strike } from 'model/Gear/Equipment'
import { Force, Heavy, Sharp, Tech, Weapon, WeaponAttributes } from 'model/Gear/Weapons'
import { ImmunitiesContext } from 'model/Immunities'
import { Item } from 'model/Items'
import { MasterMovesContext } from 'model/MasterMoves'
import { Material } from 'model/Materials'
import { Special } from 'model/Specials'
import { resetStatLimits, setFinalStats, StatsContext } from 'model/Stats'

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

function activateCard(project: TemperingProject, slot: CardSlot) {
  const card = project.cards[slot]

  if (card && card.activate) {
    card.activate(project, slot)
  }
}

export type ItemStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

export const StartStep: ItemStep = 0
export const ActivateEquipmentStep: ItemStep = 1
export const ResolveWorldPowerStep: ItemStep = 2
export const ProvideItemEnergyStep: ItemStep = 3
export const ActiveEquipmentStep: ItemStep = 4
export const ActivateItemStep: ItemStep = 5
export const PushCardsStep: ItemStep = 6
export const ActivateLeavingCardStep: ItemStep = 7
export const ActivateBottomCardStep: ItemStep = 8
export const ActivateMiddleCardStep: ItemStep = 9
export const ActivateTopCardStep: ItemStep = 10
export const ActivateHiddenCardStep: ItemStep = 11
export const ConsumeRemainingEnergyStep: ItemStep = 12
export const FinishStep: ItemStep = 13

export const ItemStepsById: { [id in ItemStep]: ItemStep } = {
  0: StartStep,
  1: ActivateEquipmentStep,
  2: ResolveWorldPowerStep,
  3: ProvideItemEnergyStep,
  4: ActiveEquipmentStep,
  5: ActivateItemStep,
  6: PushCardsStep,
  7: ActivateLeavingCardStep,
  8: ActivateBottomCardStep,
  9: ActivateMiddleCardStep,
  10: ActivateTopCardStep,
  11: ActivateHiddenCardStep,
  12: ConsumeRemainingEnergyStep,
  13: FinishStep
}

const StepCode: { [id in ItemStep]: (project: TemperingProject, item: Item) => void } = {
  0: (project) => {
    resetStatLimits(project)
    resetVolatileCards(project)
    resetAttributes(project)
    resetResistances(project)
  },
  1: (project) => activateEquipment(project),
  2: (project) => resolveWorldPower(project),
  3: (project, item) => (project.energy = item.energy),
  4: (project) => activateMaterial(project),
  5: (project, item) => activateItem(project, item),
  6: (project) => pushCards(project),
  7: (project) => activateCard(project, Leaving),
  8: (project) => activateCard(project, Bottom),
  9: (project) => activateCard(project, Middle),
  10: (project) => activateCard(project, Top),
  11: (project) => activateCard(project, Hidden),
  12: (project) => increaseRemainingEssences(project),
  13: (project) => setFinalStats(project)
}

export function runItemSteps(project: TemperingProject, item: Item, startStep: ItemStep, finishStep: ItemStep) {
  for (let currentStep = startStep; currentStep <= finishStep; ++currentStep) {
    StepCode[currentStep](project, item)
  }
}

export function addItem(project: TemperingProject, item: Item) {
  runItemSteps(project, item, StartStep, FinishStep)
}

export type OffensivePower = WeaponAttributes & {
  power: number
}

export type DefensivePower = EquipmentAttributes

export function getEssenceMarkers(project: TemperingProject): Markers {
  const { shade, wisp, dryad, aura, salamander, gnome, jinn, undine } = project.levels
  const { markerThreshold } = project.equipment

  switch (project.type) {
    case WeaponProject:
      return {
        wisp: wisp >= markerThreshold,
        shade: shade >= markerThreshold,
        dryad: dryad >= markerThreshold,
        aura: aura >= markerThreshold,
        salamander: salamander >= markerThreshold,
        gnome: gnome >= markerThreshold,
        jinn: jinn >= markerThreshold,
        undine: undine >= markerThreshold
      }
    case EquipmentProject:
      return {
        wisp: shade >= markerThreshold,
        shade: wisp >= markerThreshold,
        dryad: aura >= markerThreshold,
        aura: dryad >= markerThreshold,
        salamander: undine >= markerThreshold,
        gnome: salamander >= markerThreshold,
        jinn: gnome >= markerThreshold,
        undine: jinn >= markerThreshold
      }
    default:
      throw new Error('Unrecognized project type.')
  }
}

export function getOffensivePower(project: TemperedWeapon): OffensivePower {
  const { growthControl } = project.material
  const projectAttributes = project.attributes
  const weaponAttributes = project.equipment.attributes
  const total = totalLevels(project)

  const growthFactor = 1 + total / growthControl

  const sharp = (growthFactor * projectAttributes[Sharp] * weaponAttributes[Sharp]) / 128
  const heavy = (growthFactor * projectAttributes[Heavy] * weaponAttributes[Heavy]) / 128
  const force = (growthFactor * projectAttributes[Force] * weaponAttributes[Force]) / 128
  const tech = (growthFactor * projectAttributes[Tech] * weaponAttributes[Tech]) / 128

  return {
    power: Math.trunc(sharp + heavy + force + tech),
    sharp: Math.trunc(sharp),
    heavy: Math.trunc(heavy),
    force: Math.trunc(force),
    tech: Math.trunc(tech)
  }
}

export function getDefensivePower(project: AlteredArmor): DefensivePower {
  const projectAttributes = project.attributes
  const equipmentAttributes = project.equipment.attributes

  const slash = (projectAttributes[Slash] * equipmentAttributes[Slash]) / 64
  const strike = (projectAttributes[Strike] * equipmentAttributes[Strike]) / 64
  const pierce = (projectAttributes[Pierce] * equipmentAttributes[Pierce]) / 64
  const magic = (projectAttributes[Magic] * equipmentAttributes[Magic]) / 64

  return {
    slash: Math.trunc(slash),
    strike: Math.trunc(strike),
    pierce: Math.trunc(pierce),
    magic: Math.trunc(magic)
  }
}

export function getPrice(project: TemperingProject): number {
  const materialCoefficient = project.material.priceCoefficient
  const equipmentCoefficient = project.equipment.priceCoefficient
  const { hidden, top, middle, bottom } = project.cards

  return (
    (materialCoefficient * equipmentCoefficient) / 150 +
    (hidden?.price || 0) +
    (bottom?.price || 0) +
    (middle?.price || 0) +
    (top?.price || 0)
  )
}
