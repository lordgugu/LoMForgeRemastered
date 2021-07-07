import { RulerOfTheSky } from 'model/Cards'
import { AllWeapons, plus25Percent, Sharp } from 'model/Equipment'
import { totalLevels, Wisp } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

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

  plus25Percent(project, Sharp)

  if (wisp >= 3 && total >= 6 && energy >= 8) {
    project.cards.pending = RulerOfTheSky
  }
}
