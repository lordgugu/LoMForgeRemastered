import { WisdomGoddess } from 'model/Cards/HeavenGod'
import { totalLevels } from 'model/Essences'
import { plus50Percent } from 'model/Gear'
import { Pierce, Slash, Strike } from 'model/Gear/Equipment'
import { ActiveItem } from 'model/Items'
import { Bottles } from 'model/Items/Bottles'
import { AnimalHide, GatorSkin, CentaurHide, DragonSkin, Hide } from 'model/Materials/Hide'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const AromaOil: ActiveItem = {
  id: 'AromaOil',
  name: 'Aroma Oil',
  category: Bottles,
  energy: 24,
  activate: activateAromaOil,
  relatedCards: () => [WisdomGoddess],
  relatedMaterials: () => [AnimalHide, GatorSkin, CentaurHide, DragonSkin],
  relatedEquipmentAttributes: () => [Strike, Slash, Pierce]
}

function activateAromaOil(project: TemperingProject) {
  const { energy } = project
  const total = totalLevels(project)

  if (project.type === EquipmentProject && project.material.category === Hide) {
    plus50Percent(project, Strike)
    plus50Percent(project, Slash)
    plus50Percent(project, Pierce)
  }

  if (total >= 6 && energy >= 8) {
    project.cards.pending = WisdomGoddess
  }
}
