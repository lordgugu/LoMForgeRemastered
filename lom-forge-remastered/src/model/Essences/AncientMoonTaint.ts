import {
  Aura,
  Dryad,
  Essence,
  EssencesContext,
  Gnome,
  increaseEssence,
  Jinn,
  Salamander,
  Shade,
  Undine,
  Wisp
} from 'model/Essences'

export function ancientMoonTaint(context: EssencesContext, element: Essence): void {
  const { energy } = context

  if (energy < 8) {
    return
  }

  switch (element) {
    case Wisp:
    case Shade:
      increaseEssence(context, element)
      break
    case Dryad:
    case Aura:
    case Salamander:
    case Gnome:
    case Jinn:
    case Undine:
      context.potential[element]++
      break
  }
}
