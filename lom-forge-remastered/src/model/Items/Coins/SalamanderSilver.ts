import { Salamander as SalamanderCard } from 'model/Cards'
import { Salamander, taint } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SalamanderSilver: Item = {
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
