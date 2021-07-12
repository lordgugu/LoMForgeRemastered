import { Card, CardCategory } from 'model/Cards'
import { EnticedNymph, NymphOfDawn, NymphOfOrchards, NymphOfTheSky, SacrificedNymph } from 'model/Cards/Maiden'

export const Maiden: CardCategory = 'Maiden'

export const AllMaidenCards: Card[] = [EnticedNymph, NymphOfDawn, NymphOfOrchards, NymphOfTheSky, SacrificedNymph]

export const AllMaidenCardsById: { [id in string]: Card } = Object.fromEntries(
  AllMaidenCards.map((card) => [card.id, card])
)

export * from './EnticedNymph'
export * from './NymphOfDawn'
export * from './NymphOfOrchards'
export * from './NymphOfTheSky'
export * from './SacrificedNymph'
