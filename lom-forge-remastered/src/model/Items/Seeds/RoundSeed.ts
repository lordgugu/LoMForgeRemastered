import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Seeds } from 'model/Items/Seeds'
import { TemperingProject } from 'model/Projects'

export const RoundSeed: ActiveItem = {
  id: 'RoundSeed',
  name: 'Round Seed',
  category: Seeds,
  energy: 16,
  activate: activateRoundSeed,
  relatedCards: () => [DryadCard],
  relatedEssences: () => [Dryad]
}

function activateRoundSeed(project: TemperingProject) {
  taint(project, Dryad)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = DryadCard
  }
}
