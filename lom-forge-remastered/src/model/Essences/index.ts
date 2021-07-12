import { AncientMoon, MirroredWorld } from 'model/Cards/World'
import { TemperingProject } from 'model/Projects'
import { ancientMoonTaint } from './AncientMoonTaint'
import { mirroredWorldTaint } from './MirroredWorldTaint'
import { normalTaint } from './NormalTaint'

type PotentialEssence = 'dryad' | 'aura' | 'salamander' | 'gnome' | 'jinn' | 'undine'

export type Essence = 'wisp' | 'shade' | PotentialEssence

export const Wisp: Essence = 'wisp'
export const Shade: Essence = 'shade'
export const Dryad: Essence & PotentialEssence = 'dryad'
export const Aura: Essence & PotentialEssence = 'aura'
export const Salamander: Essence & PotentialEssence = 'salamander'
export const Gnome: Essence & PotentialEssence = 'gnome'
export const Jinn: Essence & PotentialEssence = 'jinn'
export const Undine: Essence & PotentialEssence = 'undine'

type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15

const PowerOfTwo: { [exponent in Level]: number } = {
  0: 1,
  1: 2,
  2: 4,
  3: 8,
  4: 16,
  5: 32,
  6: 64,
  7: 128,
  8: 256,
  9: 512,
  10: 1024,
  11: 2048,
  12: 4096,
  13: 8192,
  14: 16384,
  15: 32768
}

export type Resistances = { [element in Essence]: number }

export type Markers = { [element in Essence]: boolean }

export type EssencesContext = {
  energy: number
  levels: { [element in Essence]: Level }
  potential: { [element in PotentialEssence]: number }
  resistances: Resistances
}

export function increaseEssence(context: EssencesContext, element: Essence) {
  const level = context.levels[element]

  if (level === 15) {
    return
  }

  const requiredEnergy = context.resistances[element] * PowerOfTwo[level]

  if (context.energy >= requiredEnergy) {
    context.energy -= requiredEnergy
    context.levels[element]++
  }
}

export function decreaseEssence(context: EssencesContext, element: Essence) {
  if (context.levels[element] === 0) {
    return
  }

  const decrease = () => {
    const resistance = context.resistances[element]

    context.levels[element]--
    context.energy += resistance * PowerOfTwo[context.levels[element]]
  }

  switch (element) {
    case Wisp:
    case Shade:
      decrease()
      return
    default:
      if (context.energy >= 4) {
        decrease()
      }
      return
  }
}

export function increaseRemainingEssences(context: EssencesContext) {
  Array.of(Dryad, Aura, Salamander, Gnome, Jinn, Undine).forEach((element) => {
    while (context.potential[element] > 0) {
      context.potential[element]--
      increaseEssence(context, element)
    }
  })
}

export function taint(project: TemperingProject, element: Essence) {
  switch (project.worldPower) {
    case AncientMoon:
      ancientMoonTaint(project, element)
      break
    case MirroredWorld:
      mirroredWorldTaint(project, element)
      break
    default:
      normalTaint(project, element)
      break
  }
}

export function totalLevels(context: EssencesContext): number {
  return Object.values(context.levels)
    .map((level) => level as number)
    .reduce((sum, level) => sum + level, 0)
}

export function resistance75(context: EssencesContext, element: Essence) {
  let resistance = context.resistances[element]

  resistance = Math.trunc(resistance / 4) * 3

  context.resistances[element] = Math.min(resistance, 1)
}

export function resistance50(context: EssencesContext, element: Essence) {
  let resistance = context.resistances[element]

  resistance = Math.trunc(resistance / 2)

  context.resistances[element] = Math.min(resistance, 1)
}
