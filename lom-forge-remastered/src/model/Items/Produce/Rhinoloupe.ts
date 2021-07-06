import { plus25Percent } from 'model/Common'
import { AllArmors, AllWeapons } from 'model/Equipment'
import { Poison, setImmunities } from 'model/Immunities'
import { Item, Produce } from 'model/Items'
import { ArmorProjectType, TemperingProject, WeaponProjectType } from 'model/Projects'

export const Rhinoloupe: Item = {
  id: 'Rhinoloupe',
  name: 'Rhinoloupe',
  category: Produce,
  energy: 32,
  activate: activateRhinoloupe,
  relatedImmunities: () => [Poison],
  relatedWeapons: () => AllWeapons,
  relatedArmors: () => AllArmors
}

function activateRhinoloupe(project: TemperingProject) {
  switch (project.type) {
    case WeaponProjectType:
      const { sharp } = project.attributes
      project.attributes.sharp = plus25Percent(sharp)
      break
    case ArmorProjectType:
      setImmunities(project, Poison)
      break
  }
}
