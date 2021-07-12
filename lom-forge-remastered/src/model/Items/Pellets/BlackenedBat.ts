import { WingsOfDarkness } from 'model/Cards/EvilGod'
import { Shade, Wisp } from 'model/Essences'
import { Pendant } from 'model/Gear/Equipment'
import { addImmunity, Darkness } from 'model/Immunities'
import { ActiveItem } from 'model/Items'
import { Pellets } from 'model/Items/Pellets'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const BlackenedBat: ActiveItem = {
  id: 'BlackenedBat',
  name: 'Blackened Bat',
  category: Pellets,
  energy: 48,
  activate: activateBlackenedBat,
  relatedCards: () => [WingsOfDarkness],
  relatedEquipment: () => [Pendant],
  relatedImmunities: () => [Darkness],
  relatedEssences: () => [Wisp, Shade]
}

function activateBlackenedBat(project: TemperingProject) {
  const { energy } = project
  const { wisp, shade } = project.levels

  if (project.type === EquipmentProject && project.equipment === Pendant) {
    addImmunity(project, Darkness)
  }

  if (shade === 0 && wisp >= 5 && energy >= 8) {
    project.cards.pending = WingsOfDarkness
  }
}
