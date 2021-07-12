import { SpiritOfHousework } from 'model/Cards/Spirit'
import { ActiveItem } from 'model/Items'
import { Pouch } from 'model/Items/Pouch'
import { TemperingProject } from 'model/Projects'

export const Hairball: ActiveItem = {
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
