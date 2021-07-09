import {
  ActiveCard,
  AncientMoon,
  BedOfThorn,
  Bottom,
  CardSlot,
  DyingEarth,
  Hidden,
  Middle,
  MirroredWorld,
  Ragnarok,
  Top,
  World,
  Yggdrasil
} from 'model/Cards'
import { AllArmors } from 'model/Equipment'
import { Springanana } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'
import { NoReviveMoveHpRegeneration } from 'model/Specials'

export const HeavensScale: ActiveCard = {
  id: 'HeavensScale',
  name: "Heaven's Scale",
  category: World,
  price: 1800,
  activate: activateHeavensScale,
  relatedItems: () => [Springanana],
  relatedCards: () => [BedOfThorn, Yggdrasil, DyingEarth, Ragnarok, AncientMoon, MirroredWorld],
  relatedArmors: () => AllArmors,
  relatedSpecials: () => [NoReviveMoveHpRegeneration]
}

function activateHeavensScale(project: TemperingProject, slot: CardSlot) {
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
      if (project.type === ArmorProjectType) {
        project.special = NoReviveMoveHpRegeneration
      }

      break
  }
}
