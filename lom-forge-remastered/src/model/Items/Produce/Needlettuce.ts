import { BedOfThorn } from 'model/Cards'
import { minus25Percent, plus25Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Dryad, Salamander } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const Needlettuce: Item = {
  id: 'Needlettuce',
  name: 'Needlettuce',
  category: Produce,
  energy: 24,
  activate: activateNeedlettuce,
  relatedCards: () => [BedOfThorn],
  relatedWeapons: () => AllWeapons,
  relatedEssences: () => [Dryad, Salamander]
}

function activateNeedlettuce(project: TemperingProject) {
  const { energy } = project
  const { sala, dryad } = project.levels

  if (project.type === WeaponProjectType) {
    const { sharpness, weight } = project.attributes
    project.attributes.sharpness = plus25Percent(sharpness)
    project.attributes.weight = minus25Percent(weight)
  }

  if (sala === 0 && dryad > 0 && energy >= 8) {
    project.mysticPowers.prehidden = BedOfThorn
  }
}
