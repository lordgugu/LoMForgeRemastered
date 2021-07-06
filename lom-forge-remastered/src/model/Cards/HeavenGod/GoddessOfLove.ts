import { Card, HeavenGod } from 'model/Cards'
import { DamselsSigh } from 'model/Items'

export const GoddessOfLove: Card = {
  id: 'GoddessOfLove',
  name: 'Goddess of Love',
  category: HeavenGod,
  price: 3000,
  relatedItems: () => [DamselsSigh]
}
