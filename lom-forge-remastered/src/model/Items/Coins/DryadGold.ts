import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const DryadGold: Item = {
  id: 'DryadGold',
  name: 'Dryad Gold',
  category: Coins,
  energy: 64,
  activate: activateDryadGold,
  relatedCards: () => [DryadCard],
  relatedEssences: () => [Dryad]
}

function activateDryadGold(project: TemperingProject) {
  taint(project, Dryad)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = DryadCard
  }
}
