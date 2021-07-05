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
    project.mysticPowers.prehidden = Wolf
  }

  if (project.type === WeaponProjectType) {
    const { sharpness, weight } = project.attributes

    project.attributes.sharpness = plus25Percent(sharpness)
    project.attributes.weight = minus25Percent(weight)
  }
}
