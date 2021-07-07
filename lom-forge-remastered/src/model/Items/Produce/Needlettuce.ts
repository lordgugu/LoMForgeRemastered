import { BedOfThorn } from 'model/Cards'
import { AllWeapons, Heavy, minus25Percent, plus25Percent, Sharp } from 'model/Equipment'
import { Dryad, Salamander } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Needlettuce: Item = {
  id: 'Needlettuce',
  name: 'Needlettuce',
  category: Produce,
  energy: 24,
  activate: activateNeedlettuce,
  relatedCards: () => [BedOfThorn],
  relatedWeapons: () => AllWeapons,
  relatedEssences: () => [Dryad, Salamander]
}

function activateNeedlettuce(project: TemperingProject) {
  const { energy } = project
  const { salamander, dryad } = project.levels

  plus25Percent(project, Sharp)
  minus25Percent(project, Heavy)

  if (salamander === 0 && dryad > 0 && energy >= 8) {
    project.cards.pending = BedOfThorn
  }
}
