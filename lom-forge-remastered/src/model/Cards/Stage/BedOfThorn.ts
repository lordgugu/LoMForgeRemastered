import {
  AncientMoon,
  Bottom,
  Card,
  CardSlot,
  DyingEarth,
  HeavensScale,
  Middle,
  MirroredWorld,
  Ragnarok,
  Stage,
  Top,
  Yggdrasil
} from 'model/Cards'
import { AllArmors, Magic, Pierce, plus50Percent, Slash, Strike } from 'model/Equipment'
import { Needle, Needlettuce } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'
import { NoHpRegeneration } from 'model/Specials'
import { AllStats, widenStatRange } from 'model/Stats'

export const BedOfThorn: Card = {
  id: 'BedOfThorn',
  name: 'Bed of Thorn',
  category: Stage,
  price: 1500,
  activate: activateBedOfThorn,
  relatedItems: () => [Needlettuce, Needle],
  relatedCards: () => [Yggdrasil, HeavensScale, DyingEarth, Ragnarok, AncientMoon, MirroredWorld],
  relatedArmors: () => AllArmors,
  relatedSpecials: () => [NoHpRegeneration],
  relatedArmorAttributes: () => [Strike, Slash, Pierce, Magic]
}

function activateBedOfThorn(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -1, 3))

      if (project.type === ArmorProjectType) {
        project.special = NoHpRegeneration
      }

      plus50Percent(project, Strike)
      plus50Percent(project, Slash)
      plus50Percent(project, Pierce)
      plus50Percent(project, Magic)
      break
  }
}
