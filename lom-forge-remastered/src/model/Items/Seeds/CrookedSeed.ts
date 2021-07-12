import { Dryad as DryadCard } from 'model/Cards/Element'
import { Dryad, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Seeds } from 'model/Items/Seeds'
import { TemperingProject } from 'model/Projects'

export const CrookedSeed: ActiveItem = {
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
    project.cards.pending = DryadCard
  }
}
