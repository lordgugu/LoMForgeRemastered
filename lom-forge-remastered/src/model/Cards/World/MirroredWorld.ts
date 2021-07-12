import { ActiveCard, CardSlot, Hidden } from 'model/Cards'
import { BedOfThorn } from 'model/Cards/Stage'
import { AncientMoon, DyingEarth, HeavensScale, Ragnarok, World, Yggdrasil } from 'model/Cards/World'
import { Aura, Dryad, Gnome, Jinn, Salamander, Shade, Undine, Wisp } from 'model/Essences'
import { MirrorPiece } from 'model/Items/Pouch'
import { TemperingProject } from 'model/Projects'

export const MirroredWorld: ActiveCard = {
  id: 'MirroredWorld',
  name: 'Mirrored World',
  category: World,
  price: 2200,
  activate: activateMirroredWorld,
  relatedItems: () => [MirrorPiece],
  relatedEssences: () => [Wisp, Shade, Dryad, Aura, Salamander, Gnome, Jinn, Undine],
  relatedCards: () => [BedOfThorn, Yggdrasil, HeavensScale, DyingEarth, Ragnarok, AncientMoon]
}

function activateMirroredWorld(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Hidden:
      const { worldPower } = project

      if (worldPower !== undefined && worldPower !== BedOfThorn) {
        project.cards.hidden = undefined
      }

      break
  }
}
