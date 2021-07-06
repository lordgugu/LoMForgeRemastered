import { Wolf } from 'model/Cards'
import { minus25Percent, plus25Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const PeachPuppy: Item = {
  id: 'PeachPuppy',
  name: 'Peach Puppy',
  category: Produce,
  energy: 24,
  activate: activatePeachPuppy,
  relatedCards: () => [Wolf],
  relatedWeapons: () => AllWeapons
}

function activatePeachPuppy(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = Wolf
  }

  if (project.type === WeaponProjectType) {
    const { sharp, heavy } = project.attributes

    project.attributes.sharp = plus25Percent(sharp)
    project.attributes.heavy = minus25Percent(heavy)
  }
}
