import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Seeds } from 'model/Items/Seeds'
import { TemperingProject } from 'model/Projects'

export const FlatSeed: ActiveItem = {
  id: 'FlatSeed',
  name: 'Flat Seed',
  category: Seeds,
  energy: 48,
  activate: activateFlatSeed,
  relatedCards: () => [DryadCard],
  relatedEssences: () => [Dryad]
}

function activateFlatSeed(project: TemperingProject) {
  taint(project, Dryad)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = DryadCard
  }
}
