import { BedOfThorn } from 'model/Cards'
import { Dryad, Salamander } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Pouch } from 'model/Items/Pouch'
import { TemperingProject } from 'model/Projects'

export const Needle: ActiveItem = {
  id: 'Needle',
  name: 'Needle',
  category: Pouch,
  energy: 8,
  activate: activateNeedle,
  relatedCards: () => [BedOfThorn],
  relatedEssences: () => [Dryad, Salamander]
}

function activateNeedle(project: TemperingProject) {
  const { energy } = project
  const { salamander, dryad } = project.levels

  if (salamander === 0 && dryad > 0 && energy >= 8) {
    project.cards.pending = BedOfThorn
  }
}
