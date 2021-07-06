import { Gnome as GnomeCard } from 'model/Cards'
import { Gnome, taint } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const GnomeGold: Item = {
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
