import { WisdomGoddess } from 'model/Cards'
import { plus50Percent } from 'model/Common'
import { AllArmors } from 'model/Equipment'
import { totalLevels } from 'model/Essences'
import { Bottles, Item } from 'model/Items'
import { AnimalHide, CentaurHide, DragonSkin, GatorSkin, Hide } from 'model/Materials'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const AromaOil: Item = {
  id: 'AromaOil',
  name: 'Aroma Oil',
  category: Bottles,
  energy: 24,
  activate: activateAromaOil,
  relatedCards: () => [WisdomGoddess],
  relatedMaterials: () => [AnimalHide, GatorSkin, CentaurHide, DragonSkin],
  relatedArmors: () => AllArmors
}

function activateAromaOil(project: TemperingProject) {
  const { energy } = project
  const total = totalLevels(project)

  if (project.type === ArmorProjectType && project.material.category === Hide) {
    const { strike, slash, pierce } = project.attributes
    project.attributes.strike = plus50Percent(strike)
    project.attributes.slash = plus50Percent(slash)
    project.attributes.pierce = plus50Percent(pierce)
  }

  if (total >= 6 && energy >= 8) {
    project.cards.pending = WisdomGoddess
  }
}
