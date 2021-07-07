import { AncientMoon, MirroredWorld } from 'model/Cards'
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

export type Level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15

export type Levels = {
  [key in Essence]: Level
}

export type Resistances = { [key in Essence]: number }

export type Markers = { [key in Essence]: boolean }

export type PotentialGrowth = {
  [key in PotentialEssence]: number
}

export type Essences = {
  energy: number
  levels: Levels
  markers: Markers
  potential: PotentialGrowth
  resistances: Resistances
}

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

export function increaseEssence(essences: Essences, essence: Essence) {
  const level = essences.levels[essence]

  if (level === 15) {
    return
  }

  const requiredEnergy = essences.resistances[essence] * PowerOfTwo[level]

  if (essences.energy >= requiredEnergy) {
    essences.energy -= requiredEnergy
    essences.levels[essence]++
  }
}

export function decreaseEssence(essences: Essences, essence: Essence) {
  if (essences.levels[essence] === 0) {
    return
  }

  const decrease = () => {
    const resistance = essences.resistances[essence]

    essences.levels[essence]--
    essences.energy += resistance * PowerOfTwo[essences.levels[essence]]
  }

  switch (essence) {
    case Wisp:
    case Shade:
      decrease()
      return
    default:
      if (essences.energy >= 4) {
        decrease()
      }
      return
  }
}

export function increaseRemainingEssences(essences: Essences) {
  Array.of(Dryad, Aura, Salamander, Gnome, Jinn, Undine).forEach((essence) => {
    while (essences.potential[essence] > 0) {
      essences.potential[essence]--
      increaseEssence(essences, essence)
    }
  })
}

export function taint(project: TemperingProject, essence: Essence) {
  switch (project.worldCard) {
    case AncientMoon:
      ancientMoonTaint(project, essence)
      break
    case MirroredWorld:
      mirroredWorldTaint(project, essence)
      break
    default:
      normalTaint(project, essence)
      break
  }
}

export function totalLevels(essences: Essences): number {
  return Object.values(essences.levels)
    .map((level) => level as number)
    .reduce((sum, level) => sum + level, 0)
}

export function resistance75(essences: Essences, essence: Essence) {
  let resistance = essences.resistances[essence]

  resistance = Math.trunc(resistance / 4) * 3

  essences.resistances[essence] = Math.min(resistance, 1)
}

export function resistance50(essences: Essences, essence: Essence) {
  let resistance = essences.resistances[essence]

  resistance = Math.trunc(resistance / 2)

  essences.resistances[essence] = Math.min(resistance, 1)
}