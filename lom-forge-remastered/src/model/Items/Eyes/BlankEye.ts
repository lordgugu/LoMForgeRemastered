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
    const { technique } = project.attributes
    project.attributes.technique = plus25Percent(technique)
  }

  if (energy >= 4) {
    project.mysticPowers.prehidden = PixieOfEnvy
  }
}
