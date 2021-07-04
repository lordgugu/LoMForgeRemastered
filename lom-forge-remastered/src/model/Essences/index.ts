import { AncientMoon, MirroredWorld } from 'model/Cards'
import { ProjectProps } from 'model/Projects'
import { ancientMoonTaint } from './AncientMoonTaint'
import { mirroredWorldTaint } from './MirroredWorldTaint'
import { normalTaint } from './NormalTaint'

type PotentialEssence = 'dryad' | 'aura' | 'sala' | 'gnome' | 'jinn' | 'undine'
export type Essence = 'wisp' | 'shade' | PotentialEssence

export const Wisp: Essence = 'wisp'
export const Shade: Essence = 'shade'
export const Dryad: Essence & PotentialEssence = 'dryad'
export const Aura: Essence & PotentialEssence = 'aura'
export const Salamander: Essence & PotentialEssence = 'sala'
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

export type EssenceProps = {
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

export function increaseEssence(project: EssenceProps, essence: Essence): void {
  const level = project.levels[essence]

  if (level === 15) {
    return
  }

  const requiredEnergy = project.resistances[essence] * PowerOfTwo[level]

  if (project.energy >= requiredEnergy) {
    project.energy -= requiredEnergy
    project.levels[essence]++
  }
}

export function decreaseEssence(project: EssenceProps, essence: Essence): void {
  if (project.levels[essence] === 0) {
    return
  }

  switch (essence) {
    case Wisp:
    case Shade:
      break
    default:
      if (project.energy < 4) {
        return
      }
      break
  }

  const resistance = project.resistances[essence]

  project.levels[essence]--
  project.energy += resistance * PowerOfTwo[project.levels[essence]]
}

export function consumeRemainingEnergy(project: EssenceProps): void {
  const essences: PotentialEssence[] = [Dryad, Aura, Salamander, Gnome, Jinn, Undine]

  essences.forEach((essence) => {
    while (project.potential[essence] > 0) {
      project.potential[essence]--
      increaseEssence(project, essence)
    }
  })
}

export function taint(project: ProjectProps, essence: Essence): void {
  switch (project.activeWorldCard) {
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
