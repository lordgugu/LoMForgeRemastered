import {
  ActiveCard,
  BedOfThorn,
  CardSlot,
  DyingEarth,
  HeavensScale,
  Hidden,
  MirroredWorld,
  Ragnarok,
  World,
  Yggdrasil
} from 'model/Cards'
import { Aura, Dryad, Gnome, Jinn, Salamander, Shade, Undine, Wisp } from 'model/Essences'
import { ChaosCrystal } from 'model/Items/MagicCrystals'
import { TemperingProject } from 'model/Projects'

export const AncientMoon: ActiveCard = {
  id: 'AncientMoon',
  name: 'Ancient Moon',
  category: World,
  price: 2200,
  activate: activateAncientMoon,
  relatedItems: () => [ChaosCrystal],
  relatedEssences: () => [Wisp, Shade, Dryad, Aura, Salamander, Gnome, Jinn, Undine],
  relatedCards: () => [BedOfThorn, Yggdrasil, HeavensScale, DyingEarth, Ragnarok, MirroredWorld]
}

function activateAncientMoon(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Hidden:
      const { worldCard } = project

      if (worldCard !== undefined && worldCard !== BedOfThorn) {
        project.cards.hidden = undefined
      }

      break
  }
}
