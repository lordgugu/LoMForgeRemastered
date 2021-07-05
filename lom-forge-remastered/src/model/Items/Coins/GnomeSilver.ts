import { Gnome as GnomeCard } from 'model/Cards'
import { Gnome, taint } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const GnomeSilver: Item = {
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
    project.mysticPowers.prehidden = GnomeCard
  }
}
