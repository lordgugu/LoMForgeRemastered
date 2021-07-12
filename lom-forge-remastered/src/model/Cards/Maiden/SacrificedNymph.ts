import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import {
  BeastHeadedGod,
  FallenAngel,
  GodOfDestruction,
  Leviathan,
  LordOfFlies,
  WingsOfDarkness,
  WitchOfMoon
} from 'model/Cards/EvilGod'
import { Maiden } from 'model/Cards/Maiden'
import { Pendant } from 'model/Gear/Equipment'
import { addImmunity, Petrification } from 'model/Immunities'
import { GhostsHowl } from 'model/Items/Vials'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const SacrificedNymph: ActiveCard = {
  id: 'SacrificedNymph',
  name: 'Sacrificed Nymph',
  category: Maiden,
  price: 1000,
  activate: activateSacrificedNymph,
  relatedItems: () => [GhostsHowl],
  relatedCards: () => [
    FallenAngel,
    WitchOfMoon,
    LordOfFlies,
    WingsOfDarkness,
    GodOfDestruction,
    BeastHeadedGod,
    Leviathan
  ],
  relatedEquipment: () => [Pendant],
  relatedImmunities: () => [Petrification]
}

function activateSacrificedNymph(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      if (project.type === EquipmentProject && project.equipment === Pendant) {
        addImmunity(project, Petrification)
      }

      break
  }
}
