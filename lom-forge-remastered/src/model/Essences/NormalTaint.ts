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

export function normalTaint(essences: Essences, essence: Essence): void {
  const { levels, energy } = essences
  const { wisp, shade, dryad, aura, sala, gnome, jinn, undine } = levels

  switch (essence) {
    case Wisp:
      if (energy >= 8) {
        increaseEssence(essences, Wisp)
      }

      if (shade < wisp) {
        while (essences.levels.shade > 0) {
          decreaseEssence(essences, Shade)
        }
      }

      break
    case Shade:
      if (wisp === 0 && energy >= 8) {
        increaseEssence(essences, Shade)
        return
      }

      if (shade < wisp) {
        while (essences.levels.shade > 0) {
          decreaseEssence(essences, Shade)
        }
      }

      break
    case Dryad:
      if (energy >= 8 && (aura === 0 || wisp === shade)) {
        essences.potential.dryad++
        return
      }

      if (shade < wisp) {
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

      if (wisp < shade) {
        decreaseEssence(essences, Dryad)

        if (energy >= 8) {
          essences.potential.aura++
        }
      }

      break
    case Salamander:
      if (undine === 0) {
        decreaseEssence(essences, Gnome)

        if (energy >= 8) {
          essences.potential.sala++
        }
      }

      break
    case Gnome:
      if (sala === 0) {
        decreaseEssence(essences, Jinn)

        if (energy >= 8) {
          essences.potential.gnome++
        }
      }

      break
    case Jinn:
      if (gnome === 0) {
        decreaseEssence(essences, Undine)

        if (energy >= 8) {
          essences.potential.jinn++
        }
      }

      break
    case Undine:
      if (jinn === 0) {
        decreaseEssence(essences, Salamander)

        if (energy >= 8) {
          essences.potential.undine++
        }
      }

      break
  }
}
