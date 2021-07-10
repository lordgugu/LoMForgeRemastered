import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Seeds } from 'model/Items/Seeds'
import { TemperingProject } from 'model/Projects'

export const BigSeed: ActiveItem = {
  id: 'BigSeed',
  name: 'Big Seed',
  category: Seeds,
  energy: 24,
  activate: activateBigSeed,
  relatedCards: () => [DryadCard],
  relatedEssences: () => [Dryad]
}

function activateBigSeed(project: TemperingProject) {
  taint(project, Dryad)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = DryadCard
  }
}
