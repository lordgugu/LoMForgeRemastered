import { Card, World } from 'model/Cards'
import { Aura, Dryad, Gnome, Jinn, Salamander, Shade, Undine, Wisp } from 'model/Essences'
import { MirrorPiece } from 'model/Items'

export const MirroredWorld: Card = {
  id: 'MirroredWorld',
  name: 'Mirrored World',
  category: World,
  price: 2200,
  relatedItems: () => [MirrorPiece],
  relatedEssences: () => [Wisp, Shade, Dryad, Aura, Salamander, Gnome, Jinn, Undine]
}
