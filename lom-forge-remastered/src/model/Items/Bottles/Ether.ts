import { BlacksmithGod, SpiritOfMountain } from 'model/Cards'
import { Aura, Gnome } from 'model/Essences'
import { Bottles, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Ether: Item = {
  id: 'Ether',
  name: 'Ether',
  category: Bottles,
  energy: 8,
  activate: activateEther,
  relatedCards: () => [BlacksmithGod, SpiritOfMountain],
  relatedEssences: () => [Aura, Gnome]
}

function activateEther(project: TemperingProject) {
  const { energy } = project
  const { aura, gnome } = project.levels

  if (aura >= 3 && gnome >= 3 && energy >= 8) {
    project.cards.pending = BlacksmithGod
  }

  if (aura < 3 || gnome < 3) {
    project.cards.pending = SpiritOfMountain
  }
}
