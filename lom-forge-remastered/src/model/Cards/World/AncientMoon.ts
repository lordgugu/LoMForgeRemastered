import { ActiveCard, CardSlot, Hidden } from 'model/Cards'
import { BedOfThorn } from 'model/Cards/Stage'
import { DyingEarth, HeavensScale, MirroredWorld, Ragnarok, World, Yggdrasil } from 'model/Cards/World'
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
      const { worldPower } = project

      if (worldPower !== undefined && worldPower !== BedOfThorn) {
        project.cards.hidden = undefined
      }

      break
  }
}
