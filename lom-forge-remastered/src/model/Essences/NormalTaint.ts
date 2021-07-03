import {
  Aura,
  decreaseEssence,
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

export function normalTaint(project: EssenceProps, essence: Essence): void {
  const { levels, energy, potential } = project
  const { wisp, shade, dryad, aura, sala, gnome, jinn, undine } = levels

  switch (essence) {
    case Wisp:
      if (energy >= 8) {
        increaseEssence(project, Wisp)
      }

      if (shade < wisp) {
        while (levels[Shade] > 0) {
          decreaseEssence(project, Shade)
        }
      }

      break
    case Shade:
      if (wisp === 0 && energy >= 8) {
        increaseEssence(project, Shade)
        return
      }

      if (shade < wisp) {
        while (levels[Shade] > 0) {
          decreaseEssence(project, Shade)
        }
      }

      break
    case Dryad:
      if (energy >= 8 && (aura === 0 || wisp === shade)) {
        potential.dryad++
        return
      }

      if (shade < wisp) {
        decreaseEssence(project, Aura)

        if (energy >= 8) {
          potential.dryad++
        }
      }

      break
    case Aura:
      if (energy >= 8 && (dryad === 0 || wisp === shade)) {
        potential.aura++
        return
      }

      if (wisp < shade) {
        decreaseEssence(project, Dryad)

        if (energy >= 8) {
          potential.aura++
        }
      }

      break
    case Salamander:
      if (undine === 0) {
        decreaseEssence(project, Gnome)

        if (energy >= 8) {
          potential.sala++
        }
      }

      break
    case Gnome:
      if (sala === 0) {
        decreaseEssence(project, Jinn)

        if (energy >= 8) {
          potential.gnome++
        }
      }

      break
    case Jinn:
      if (gnome === 0) {
        decreaseEssence(project, Undine)

        if (energy >= 8) {
          potential.jinn++
        }
      }

      break
    case Undine:
      if (jinn === 0) {
        decreaseEssence(project, Salamander)

        if (energy >= 8) {
          potential.undine++
        }
      }

      break
  }
}