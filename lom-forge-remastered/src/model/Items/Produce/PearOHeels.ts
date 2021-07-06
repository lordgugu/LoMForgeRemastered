import { SpiritOfShoes } from 'model/Cards'
import { plus25Percent } from 'model/Common'
import { Boots, Shoes } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const PearOHeels: Item = {
  id: 'PearOHeels',
  name: "Pear o'Heels",
  category: Produce,
  energy: 32,
  activate: activatePearOHeels,
  relatedCards: () => [SpiritOfShoes],
  relatedArmors: () => [Boots, Shoes]
}

function activatePearOHeels(project: TemperingProject) {
  const { energy, equipment } = project

  if (project.type === ArmorProjectType) {
    const { strike, slash, pierce } = project.attributes

    switch (equipment) {
      case Boots:
      case Shoes:
        project.attributes.strike = plus25Percent(strike)
        project.attributes.slash = plus25Percent(slash)
        project.attributes.pierce = plus25Percent(pierce)
        break
    }
  }

  if (energy >= 16) {
    project.cards.pending = SpiritOfShoes
  }
}
