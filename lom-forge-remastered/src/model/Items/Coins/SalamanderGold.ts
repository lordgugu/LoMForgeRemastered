import { Salamander as SalamanderCard } from 'model/Cards/Element'
import { Salamander, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const SalamanderGold: ActiveItem = {
  id: 'SalamanderGold',
  originalName: 'Sala Gold',
  remasteredName: 'Salamander Gold',
  category: Coins,
  energy: 64,
  activate: activateSalamanderGold,
  relatedCards: () => [SalamanderCard],
  relatedEssences: () => [Salamander]
}

function activateSalamanderGold(project: TemperingProject) {
  taint(project, Salamander)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = SalamanderCard
  }
}
