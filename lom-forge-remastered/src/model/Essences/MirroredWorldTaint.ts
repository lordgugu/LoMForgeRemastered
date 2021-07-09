import {
  Aura,
  decreaseEssence,
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

export function mirroredWorldTaint(context: EssencesContext, element: Essence): void {
  const { levels, energy } = context
  const { wisp, shade, dryad, aura, salamander, gnome, jinn, undine } = levels

  switch (element) {
    case Wisp:
      if (shade === 0 && energy >= 8) {
        increaseEssence(context, Wisp)
        return
      }

      if (wisp < shade) {
        while (context.levels.wisp > 0) {
          decreaseEssence(context, Wisp)
        }
      }

      break
    case Shade:
      if (energy >= 8) {
        increaseEssence(context, Shade)
      }

      if (wisp < shade) {
        while (context.levels.wisp > 0) {
          decreaseEssence(context, Wisp)
        }
      }

      break
    case Dryad:
      if (energy >= 8 && (aura === 0 || wisp === shade)) {
        context.potential.dryad++
        return
      }

      if (wisp < shade) {
        decreaseEssence(context, Aura)

        if (energy >= 8) {
          context.potential.dryad++
        }
      }

      break
    case Aura:
      if (energy >= 8 && (dryad === 0 || wisp === shade)) {
        context.potential.aura++
        return
      }

      if (shade < wisp) {
        decreaseEssence(context, Dryad)

        if (energy >= 8) {
          context.potential.aura++
        }
      }

      break
    case Salamander:
      if (gnome === 0) {
        decreaseEssence(context, Undine)

        if (energy >= 8) {
          context.potential.salamander++
        }
      }

      break
    case Gnome:
      if (jinn === 0) {
        decreaseEssence(context, Salamander)

        if (energy >= 8) {
          context.potential.gnome++
        }
      }

      break
    case Jinn:
      if (undine === 0) {
        decreaseEssence(context, Gnome)

        if (energy >= 8) {
          context.potential.jinn++
        }
      }

      break
    case Undine:
      if (salamander === 0) {
        decreaseEssence(context, Jinn)

        if (energy >= 8) {
          context.potential.undine++
        }
      }

      break
  }
}
