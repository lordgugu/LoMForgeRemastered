import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { Item, Seeds } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SmallSeed: Item = {
  id: 'SmallSeed',
  name: 'Small Seed',
  category: Seeds,
  energy: 24,
  activate: activateSmallSeed,
  relatedCards: () => [DryadCard],
  relatedEssences: () => [Dryad]
}

function activateSmallSeed(project: TemperingProject) {
  taint(project, Dryad)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = DryadCard
  }
}
