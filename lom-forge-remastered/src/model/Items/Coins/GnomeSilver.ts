import { Gnome as GnomeCard } from 'model/Cards/Element'
import { Gnome, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const GnomeSilver: ActiveItem = {
  id: 'GnomeSilver',
  name: 'Gnome Silver',
  category: Coins,
  energy: 48,
  activate: activateGnomeSilver,
  relatedCards: () => [GnomeCard],
  relatedEssences: () => [Gnome]
}

function activateGnomeSilver(project: TemperingProject) {
  taint(project, Gnome)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = GnomeCard
  }
}
