import {
  BeastHeadedGod,
  Card,
  FallenAngel,
  GodOfDestruction,
  Leviathan,
  LordOfFlies,
  PixieOfEnvy,
  PixieOfGluttony,
  PixieOfGreed,
  PixieOfLust,
  PixieOfPride,
  PixieOfSloth,
  PixieOfWrath,
  WingsOfDarkness,
  WitchOfMoon,
  World
} from 'model/Cards'
import { PineOClock } from 'model/Items'

export const Ragnarok: Card = {
  id: 'Ragnarok',
  name: 'Ragnarok',
  category: World,
  price: 10000,
  relatedItems: () => [PineOClock],
  relatedCards: () => [
    PixieOfPride,
    FallenAngel,
    PixieOfSloth,
    WitchOfMoon,
    PixieOfEnvy,
    LordOfFlies,
    PixieOfLust,
    WingsOfDarkness,
    PixieOfWrath,
    GodOfDestruction,
    PixieOfGluttony,
    Leviathan,
    PixieOfGreed,
    BeastHeadedGod
  ]
}
