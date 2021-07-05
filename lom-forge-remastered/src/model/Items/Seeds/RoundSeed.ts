import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { Item, Seeds } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const RoundSeed: Item = {
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
    project.mysticPowers.prehidden = DryadCard
  }
}
