import { Card, World } from 'model/Cards'
import { Aura, Dryad, Gnome, Jinn, Salamander, Shade, Undine, Wisp } from 'model/Essences'
import { ChaosCrystal } from 'model/Items'

export const AncientMoon: Card = {
  id: 'AncientMoon',
  name: 'Ancient Moon',
  category: World,
  price: 2200,
  relatedItems: () => [ChaosCrystal],
  relatedEssences: () => [Wisp, Shade, Dryad, Aura, Salamander, Gnome, Jinn, Undine]
}
