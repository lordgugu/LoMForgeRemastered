import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { Item, Seeds } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const BigSeed: Item = {
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
    project.mysticPowers.prehidden = DryadCard
  }
}
