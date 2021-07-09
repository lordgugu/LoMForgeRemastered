import { RulerOfTheSky } from 'model/Cards'
import { totalLevels, Wisp } from 'model/Essences'
import { plus25Percent } from 'model/Gear'
import { Sharp } from 'model/Gear/Weapons'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SpadeBasil: Item = {
  id: 'SpadeBasil',
  name: 'Spade Basil',
  category: Produce,
  energy: 16,
  activate: activateSpadeBasil,
  relatedCards: () => [RulerOfTheSky],
  relatedWeaponAttributes: () => [Sharp],
  relatedEssences: () => [Wisp]
}

function activateSpadeBasil(project: TemperingProject) {
  const { energy } = project
  const { wisp } = project.levels
  const total = totalLevels(project)

  plus25Percent(project, Sharp)

  if (wisp >= 3 && total >= 6 && energy >= 8) {
    project.cards.pending = RulerOfTheSky
  }
}
