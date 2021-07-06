import { SpiritOfHousework } from 'model/Cards'
import { Item, Pouch } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Hairball: Item = {
  id: 'Hairball',
  name: 'Hairball',
  category: Pouch,
  energy: 8,
  activate: activateHairball,
  relatedCards: () => [SpiritOfHousework]
}

function activateHairball(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = SpiritOfHousework
  }
}
