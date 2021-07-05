import { Card, Element } from 'model/Cards'
import {
  BigSeed,
  CrookedSeed,
  DryadGold,
  DryadSilver,
  FlatSeed,
  LongSeed,
  OblongSeed,
  RoundSeed,
  SmallSeed
} from 'model/Items'

export const Dryad: Card = {
  id: 'Dryad',
  name: 'Dryad',
  category: Element,
  price: 250,
  relatedItems: () => [
    DryadGold,
    DryadSilver,
    RoundSeed,
    OblongSeed,
    CrookedSeed,
    BigSeed,
    SmallSeed,
    LongSeed,
    FlatSeed
  ]
}
