import { AllArmors, plus25Percent, Sharp } from 'model/Equipment'
import { Poison, setImmunities } from 'model/Immunities'
import { Item, Produce } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const Rhinoloupe: Item = {
  id: 'Rhinoloupe',
  name: 'Rhinoloupe',
  category: Produce,
  energy: 32,
  activate: activateRhinoloupe,
  relatedImmunities: () => [Poison],
  relatedWeaponAttributes: () => [Sharp],
  relatedArmors: () => AllArmors
}

function activateRhinoloupe(project: TemperingProject) {
  plus25Percent(project, Sharp)

  if (project.type === ArmorProjectType) {
    setImmunities(project, Poison)
  }
}
