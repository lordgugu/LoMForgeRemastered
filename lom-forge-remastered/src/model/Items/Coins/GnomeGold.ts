import { Gnome as GnomeCard } from 'model/Cards/Element'
import { Gnome, taint } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const GnomeGold: ActiveItem = {
  id: 'GnomeGold',
  name: 'Gnome Gold',
  category: Coins,
  energy: 64,
  activate: activateGnomeGold,
  relatedCards: () => [GnomeCard],
  relatedEssences: () => [Gnome]
}

function activateGnomeGold(project: TemperingProject) {
  taint(project, Gnome)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = GnomeCard
  }
}
