import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { Item, Seeds } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const LongSeed: Item = {
  id: 'LongSeed',
  name: 'Long Seed',
  category: Seeds,
  energy: 24,
  activate: activateLongSeed,
  relatedCards: () => [DryadCard],
  relatedEssences: () => [Dryad]
}

function activateLongSeed(project: TemperingProject) {
  taint(project, Dryad)

  if (project.energy >= 8) {
    project.cards.pending = DryadCard
  }
}
