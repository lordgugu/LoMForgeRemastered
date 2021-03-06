import { BedOfThorn } from 'model/Cards/Stage'
import { Dryad, Salamander } from 'model/Essences'
import { minus25Percent, plus25Percent } from 'model/Gear'
import { Heavy, Sharp } from 'model/Gear/Weapons'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'

export const Needlettuce: ActiveItem = {
  id: 'Needlettuce',
  name: 'Needlettuce',
  category: Produce,
  energy: 24,
  activate: activateNeedlettuce,
  relatedCards: () => [BedOfThorn],
  relatedWeaponAttributes: () => [Sharp, Heavy],
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
