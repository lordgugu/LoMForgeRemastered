import {
  ActiveCard,
  BeastHeadedGod,
  Bottom,
  CardSlot,
  FallenAngel,
  GodOfDestruction,
  Leviathan,
  LordOfFlies,
  Maiden,
  Middle,
  Top,
  WingsOfDarkness,
  WitchOfMoon
} from 'model/Cards'
import { Pendant } from 'model/Gear/Equipment'
import { addImmunity, Petrification } from 'model/Immunities'
import { GhostsHowl } from 'model/Items'
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
