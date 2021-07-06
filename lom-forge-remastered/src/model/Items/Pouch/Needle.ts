import { BedOfThorn } from 'model/Cards'
import { Dryad, Salamander } from 'model/Essences'
import { Item, Pouch } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Needle: Item = {
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
  const { sala, dryad } = project.levels

  if (sala === 0 && dryad > 0 && energy >= 8) {
    project.cards.pending = BedOfThorn
  }
}
