import { Salamander as SalamanderCard } from 'model/Cards/Element'
import { Salamander, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const SalamanderSilver: ActiveItem = {
  id: 'SalamanderSilver',
  originalName: 'Sala Silver',
  remasteredName: 'Salamander Silver',
  category: Coins,
  energy: 48,
  activate: activateSalamanderSilver,
  relatedCards: () => [SalamanderCard],
  relatedEssences: () => [Salamander]
}

function activateSalamanderSilver(project: TemperingProject) {
  taint(project, Salamander)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = SalamanderCard
  }
}
