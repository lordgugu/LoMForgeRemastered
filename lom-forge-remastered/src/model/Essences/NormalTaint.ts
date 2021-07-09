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

export function normalTaint(context: EssencesContext, element: Essence): void {
  const { levels, energy } = context
  const { wisp, shade, dryad, aura, salamander, gnome, jinn, undine } = levels

  switch (element) {
    case Wisp:
      if (energy >= 8) {
        increaseEssence(context, Wisp)
      }

      if (shade < wisp) {
        while (context.levels.shade > 0) {
          decreaseEssence(context, Shade)
        }
      }

      break
    case Shade:
      if (wisp === 0 && energy >= 8) {
        increaseEssence(context, Shade)
        return
      }

      if (shade < wisp) {
        while (context.levels.shade > 0) {
          decreaseEssence(context, Shade)
        }
      }

      break
    case Dryad:
      if (energy >= 8 && (aura === 0 || wisp === shade)) {
        context.potential.dryad++
        return
      }

      if (shade < wisp) {
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

      if (wisp < shade) {
        decreaseEssence(context, Dryad)

        if (energy >= 8) {
          context.potential.aura++
        }
      }

      break
    case Salamander:
      if (undine === 0) {
        decreaseEssence(context, Gnome)

        if (energy >= 8) {
          context.potential.salamander++
        }
      }

      break
    case Gnome:
      if (salamander === 0) {
        decreaseEssence(context, Jinn)

        if (energy >= 8) {
          context.potential.gnome++
        }
      }

      break
    case Jinn:
      if (gnome === 0) {
        decreaseEssence(context, Undine)

        if (energy >= 8) {
          context.potential.jinn++
        }
      }

      break
    case Undine:
      if (jinn === 0) {
        decreaseEssence(context, Salamander)

        if (energy >= 8) {
          context.potential.undine++
        }
      }

      break
  }
}
