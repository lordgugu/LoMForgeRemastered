import { Card, CardCategory } from 'model/Cards'
import { Aura, Dryad, Gnome, Jinn, Salamander, Shade, Undine, Wisp } from 'model/Cards/Element'

export const Element: CardCategory = 'Element'

export const AllElementCards: Card[] = [Aura, Dryad, Gnome, Jinn, Salamander, Shade, Undine, Wisp]

export const AllElementCardsById: { [id in string]: Card } = Object.fromEntries(
  AllElementCards.map((card) => [card.id, card])
)

export * from './Aura'
export * from './Dryad'
export * from './Gnome'
export * from './Jinn'
export * from './Salamander'
export * from './Shade'
export * from './Undine'
export * from './Wisp'
