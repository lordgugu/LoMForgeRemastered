import { Salamander as SalamanderCard } from 'model/Cards'
import { Salamander, taint } from 'model/Essences'
import { Item, MagicStones } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Firestone: Item = {
  id: 'Firestone',
  originalName: 'Fire Stone',
  remasteredName: 'Firestone',
  category: MagicStones,
  energy: 24,
  activate: activateFireStone,
  relatedCards: () => [SalamanderCard],
  relatedEssences: () => [Salamander]
}

function activateFireStone(project: TemperingProject) {
  taint(project, Salamander)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = SalamanderCard
  }
}
