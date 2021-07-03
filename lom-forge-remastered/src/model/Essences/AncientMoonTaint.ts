import {
  Aura,
  Dryad,
  Essence,
  EssenceProps,
  Gnome,
  increaseEssence,
  Jinn,
  Salamander,
  Shade,
  Undine,
  Wisp
} from 'model/Essences'

export function ancientMoonTaint(project: EssenceProps, essence: Essence): void {
  let { energy, potential } = project

  if (energy < 8) {
    return
  }

  switch (essence) {
    case Wisp:
      increaseEssence(project, Wisp)
      break
    case Shade:
      increaseEssence(project, Shade)
      break
    case Dryad:
      potential.dryad++
      break
    case Aura:
      potential.aura++
      break
    case Salamander:
      potential.sala++
      break
    case Gnome:
      potential.gnome++
      break
    case Jinn:
      potential.jinn++
      break
    case Undine:
      potential.undine++
      break
  }
}
