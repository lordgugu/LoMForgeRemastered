import { ActiveCard, Bottom, CardSlot, Hidden, Middle, Top } from 'model/Cards'
import {
  BeastHeadedGod,
  FallenAngel,
  GodOfDestruction,
  Leviathan,
  LordOfFlies,
  WingsOfDarkness,
  WitchOfMoon
} from 'model/Cards/EvilGod'
import {
  PixieOfEnvy,
  PixieOfGluttony,
  PixieOfGreed,
  PixieOfLust,
  PixieOfPride,
  PixieOfSloth,
  PixieOfWrath
} from 'model/Cards/Pixie'
import { BedOfThorn } from 'model/Cards/Stage'
import { AncientMoon, DyingEarth, HeavensScale, MirroredWorld, World, Yggdrasil } from 'model/Cards/World'
import { TwoHandedSword } from 'model/Gear/Weapons'
import { PineOClock } from 'model/Items/Produce'
import { Ragnarok as RagnarokMasterMove } from 'model/MasterMoves/BottomSlot'
import { TemperingProject, WeaponProject } from 'model/Projects'

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
      const { worldPower } = project

      if (worldPower !== undefined && worldPower !== BedOfThorn) {
        project.cards.hidden = undefined
      }

      break
    case Top:
    case Middle:
    case Bottom:
      if (project.type === WeaponProject && project.equipment === TwoHandedSword) {
        project.masterMoves.bottom = RagnarokMasterMove
      }

      break
  }
}
