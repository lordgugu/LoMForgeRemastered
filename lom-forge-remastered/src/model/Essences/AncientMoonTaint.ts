import {
  Aura,
  Dryad,
  Essence,
  Essences,
  Gnome,
  increaseEssence,
  Jinn,
  Salamander,
  Shade,
  Undine,
  Wisp
} from 'model/Essences'

export function ancientMoonTaint(essences: Essences, essence: Essence): void {
  const { energy } = essences

  if (energy < 8) {
    return
  }

  switch (essence) {
    case Wisp:
    case Shade:
      increaseEssence(essences, essence)
      break
    case Dryad:
    case Aura:
    case Salamander:
    case Gnome:
    case Jinn:
    case Undine:
      essences.potential[essence]++
      break
  }
}
