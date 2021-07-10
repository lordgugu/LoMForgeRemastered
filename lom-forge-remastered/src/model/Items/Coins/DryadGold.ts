import { Dryad as DryadCard } from 'model/Cards'
import { Dryad, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const DryadGold: ActiveItem = {
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
