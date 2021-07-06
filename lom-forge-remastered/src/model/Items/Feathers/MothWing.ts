import { SpiritOfForest } from 'model/Cards'
import { minus25Percent, plus50Percent } from 'model/Common'
import { AllArmors } from 'model/Equipment'
import { Feathers, Item } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const MothWing: Item = {
  id: 'MothWing',
  name: 'Moth Wing',
  category: Feathers,
  energy: 32,
  activate: activateMothWing,
  relatedCards: () => [SpiritOfForest],
  relatedArmors: () => AllArmors
}

function activateMothWing(project: TemperingProject) {
  const { energy } = project

  if (project.type === ArmorProjectType) {
    const { strike, slash, pierce, magic } = project.attributes
    project.attributes.strike = minus25Percent(strike)
    project.attributes.slash = minus25Percent(slash)
    project.attributes.pierce = minus25Percent(pierce)
    project.attributes.magic = plus50Percent(magic)
  }

  if (energy >= 8) {
    project.cards.pending = SpiritOfForest
  }
}
