import { WingsOfDarkness } from 'model/Cards'
import { Pendant } from 'model/Equipment'
import { Shade, Wisp } from 'model/Essences'
import { addImmunity, Darkness } from 'model/Immunities'
import { Item, Pellets } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const BlackenedBat: Item = {
  id: 'BlackenedBat',
  name: 'Blackened Bat',
  category: Pellets,
  energy: 48,
  activate: activateBlackenedBat,
  relatedCards: () => [WingsOfDarkness],
  relatedArmors: () => [Pendant],
  relatedImmunities: () => [Darkness],
  relatedEssences: () => [Wisp, Shade]
}

function activateBlackenedBat(project: TemperingProject) {
  const { energy } = project
  const { wisp, shade } = project.levels

  if (project.type === ArmorProjectType && project.equipment === Pendant) {
    addImmunity(project, Darkness)
  }

  if (shade === 0 && wisp >= 5 && energy >= 8) {
    project.cards.pending = WingsOfDarkness
  }
}
