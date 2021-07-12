import { Salamander as SalamanderCard } from 'model/Cards/Element'
import { Salamander, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { MagicStones } from 'model/Items/MagicStones'
import { TemperingProject } from 'model/Projects'

export const Firestone: ActiveItem = {
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
