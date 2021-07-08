import {
  BeastHeadedGod,
  Card,
  FallenAngel,
  GodOfDestruction,
  Leviathan,
  LordOfFlies,
  Maiden,
  WingsOfDarkness,
  WitchOfMoon
} from 'model/Cards'
import { GhostsHowl } from 'model/Items'

export const SacrificedNymph: Card = {
  id: 'SacrificedNymph',
  name: 'Sacrificed Nymph',
  category: Maiden,
  price: 1000,
  relatedItems: () => [GhostsHowl],
  relatedCards: () => [
    FallenAngel,
    WitchOfMoon,
    LordOfFlies,
    WingsOfDarkness,
    GodOfDestruction,
    BeastHeadedGod,
    Leviathan
  ]
}
