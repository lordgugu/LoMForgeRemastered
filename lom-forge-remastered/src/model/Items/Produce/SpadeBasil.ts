import { RulerOfTheSky } from 'model/Cards'
import { plus25Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { totalLevels, Wisp } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const SpadeBasil: Item = {
  id: 'SpadeBasil',
  name: 'Spade Basil',
  category: Produce,
  energy: 16,
  activate: activateSpadeBasil,
  relatedCards: () => [RulerOfTheSky],
  relatedWeapons: () => AllWeapons,
  relatedEssences: () => [Wisp]
}

function activateSpadeBasil(project: TemperingProject) {
  const { energy } = project
  const { wisp } = project.levels
  const total = totalLevels(project)

  if (project.type === WeaponProjectType) {
    const { sharp } = project.attributes
    project.attributes.sharp = plus25Percent(sharp)
  }

  if (wisp >= 3 && total >= 6 && energy >= 8) {
    project.cards.pending = RulerOfTheSky
  }
}
