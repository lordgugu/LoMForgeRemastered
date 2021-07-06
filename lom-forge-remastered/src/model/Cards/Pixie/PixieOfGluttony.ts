import { Card, Pixie } from 'model/Cards'
import { Garlicrown, HolyWater, KnockoutDust, SillyEye } from 'model/Items'

export const PixieOfGluttony: Card = {
  id: 'PixieOfGluttony',
  name: 'Pixie (of Gluttony)',
  category: Pixie,
  price: 150,
  relatedItems: () => [Garlicrown, SillyEye, HolyWater, KnockoutDust]
}
