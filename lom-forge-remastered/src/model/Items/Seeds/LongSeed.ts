import { Dryad as DryadCard } from 'model/Cards/Element'
import { Dryad, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Seeds } from 'model/Items/Seeds'
import { TemperingProject } from 'model/Projects'

export const LongSeed: ActiveItem = {
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
