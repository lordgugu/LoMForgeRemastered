import { Gnome as GnomeCard } from 'model/Cards'
import { Gnome, taint } from 'model/Essences'
import { Item, MagicStones } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Earthstone: Item = {
  id: 'Earthstone',
  originalName: 'Earth Stone',
  remasteredName: 'Earthstone',
  category: MagicStones,
  energy: 24,
  activate: activateEarthStone,
  relatedCards: () => [GnomeCard],
  relatedEssences: () => [Gnome]
}

function activateEarthStone(project: TemperingProject) {
  taint(project, Gnome)

  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = GnomeCard
  }
}
