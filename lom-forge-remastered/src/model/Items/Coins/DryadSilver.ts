import { Dryad as DryadCard } from 'model/Cards/Element'
import { Dryad, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const DryadSilver: ActiveItem = {
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
