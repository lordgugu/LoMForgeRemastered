import {
  Aura,
  decreaseEssence,
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

export function mirroredWorldTaint(essences: Essences, essence: Essence): void {
  const { levels, energy } = essences
  const { wisp, shade, dryad, aura, salamander, gnome, jinn, undine } = levels

  switch (essence) {
    case Wisp:
      if (shade === 0 && energy >= 8) {
        increaseEssence(essences, Wisp)
        return
      }

      if (wisp < shade) {
        while (essences.levels.wisp > 0) {
          decreaseEssence(essences, Wisp)
        }
      }

      break
    case Shade:
      if (energy >= 8) {
        increaseEssence(essences, Shade)
      }

      if (wisp < shade) {
        while (essences.levels.wisp > 0) {
          decreaseEssence(essences, Wisp)
        }
      }

      break
    case Dryad:
      if (energy >= 8 && (aura === 0 || wisp === shade)) {
        essences.potential.dryad++
        return
      }

      if (wisp < shade) {
        decreaseEssence(essences, Aura)

        if (energy >= 8) {
          essences.potential.dryad++
        }
      }

      break
    case Aura:
      if (energy >= 8 && (dryad === 0 || wisp === shade)) {
        essences.potential.aura++
        return
      }

      if (shade < wisp) {
        decreaseEssence(essences, Dryad)

        if (energy >= 8) {
          essences.potential.aura++
        }
      }

      break
    case Salamander:
      if (gnome === 0) {
        decreaseEssence(essences, Undine)

        if (energy >= 8) {
          essences.potential.salamander++
        }
      }

      break
    case Gnome:
      if (jinn === 0) {
        decreaseEssence(essences, Salamander)

        if (energy >= 8) {
          essences.potential.gnome++
        }
      }

      break
    case Jinn:
      if (undine === 0) {
        decreaseEssence(essences, Gnome)

        if (energy >= 8) {
          essences.potential.jinn++
        }
      }

      break
    case Undine:
      if (salamander === 0) {
        decreaseEssence(essences, Jinn)

        if (energy >= 8) {
          essences.potential.undine++
        }
      }

      break
  }
}
