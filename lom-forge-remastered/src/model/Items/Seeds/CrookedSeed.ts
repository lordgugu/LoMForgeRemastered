import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { Item, Seeds } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const CrookedSeed: Item = {
  id: 'CrookedSeed',
  name: 'Crooked Seed',
  category: Seeds,
  energy: 16,
  activate: activateCrookedSeed,
  relatedCards: () => [DryadCard],
  relatedEssences: () => [Dryad]
}

function activateCrookedSeed(project: TemperingProject) {
  taint(project, Dryad)

  const { energy } = project

  if (energy >= 8) {
    project.mysticPowers.prehidden = DryadCard
  }
}
