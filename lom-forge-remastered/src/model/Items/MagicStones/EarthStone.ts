import { Gnome as GnomeCard } from 'model/Cards'
import { Gnome, taint } from 'model/Essences'
import { Item, MagicStones } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const EarthStone: Item = {
  id: 'EarthStone',
  name: 'Earth Stone',
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
    project.mysticPowers.prehidden = GnomeCard
  }
}
