import { PixieOfEnvy } from 'model/Cards'
import { plus25Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Eyes, Item } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const BlankEye: Item = {
  id: 'BlankEye',
  name: 'Blank Eye',
  category: Eyes,
  energy: 32,
  activate: activateBlankEye,
  relatedCards: () => [PixieOfEnvy],
  relatedWeapons: () => AllWeapons
}

function activateBlankEye(project: TemperingProject) {
  const { energy } = project

  if (project.type === WeaponProjectType) {
    const { tech } = project.attributes
    project.attributes.tech = plus25Percent(tech)
  }

  if (energy >= 4) {
    project.cards.pending = PixieOfEnvy
  }
}
