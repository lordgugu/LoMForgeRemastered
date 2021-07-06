import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const DryadSilver: Item = {
  id: 'DryadSilver',
  name: 'Dryad Silver',
  category: Coins,
  energy: 48,
  activate: activateDryadSilver,
  relatedCards: () => [DryadCard],
  relatedEssences: () => [Dryad]
}

function activateDryadSilver(project: TemperingProject) {
  taint(project, Dryad)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = DryadCard
  }
}
