import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { Item, Seeds } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const OblongSeed: Item = {
  id: 'OblongSeed',
  name: 'Oblong Seed',
  category: Seeds,
  energy: 16,
  activate: activateOblongSeed,
  relatedCards: () => [DryadCard],
  relatedEssences: () => [Dryad]
}

function activateOblongSeed(project: TemperingProject) {
  taint(project, Dryad)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = DryadCard
  }
}
