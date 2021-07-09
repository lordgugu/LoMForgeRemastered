import {
  ActiveCard,
  AncientMoon,
  BeastHeadedGod,
  BedOfThorn,
  Bottom,
  CardSlot,
  DyingEarth,
  FallenAngel,
  GodOfDestruction,
  HeavensScale,
  Hidden,
  Leviathan,
  LordOfFlies,
  Middle,
  MirroredWorld,
  PixieOfEnvy,
  PixieOfGluttony,
  PixieOfGreed,
  PixieOfLust,
  PixieOfPride,
  PixieOfSloth,
  PixieOfWrath,
  Top,
  WingsOfDarkness,
  WitchOfMoon,
  World,
  Yggdrasil
} from 'model/Cards'
import { TwoHandedSword } from 'model/Equipment'
import { PineOClock } from 'model/Items'
import { Ragnarok as RagnarokMasterMove } from 'model/MasterMoves/BottomSlot'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const Ragnarok: ActiveCard = {
  id: 'Ragnarok',
  name: 'Ragnarok',
  category: World,
  price: 10000,
  activate: activateRagnarok,
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
    BeastHeadedGod,
    BedOfThorn,
    Yggdrasil,
    HeavensScale,
    DyingEarth,
    AncientMoon,
    MirroredWorld
  ],
  relatedWeapons: () => [TwoHandedSword],
  relatedMasterMoves: {
    bottom: () => [RagnarokMasterMove]
  }
}

function activateRagnarok(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Hidden:
      const { worldCard } = project

      if (worldCard !== undefined && worldCard !== BedOfThorn) {
        project.cards.hidden = undefined
      }

      break
    case Top:
    case Middle:
    case Bottom:
      if (project.type === WeaponProjectType && project.equipment === TwoHandedSword) {
        project.masterMoves.bottom = RagnarokMasterMove
      }

      break
  }
}
