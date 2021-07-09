import { plus25Percent } from 'model/Gear'
import { AllEquipment } from 'model/Gear/Equipment'
import { Sharp } from 'model/Gear/Weapons'
import { Poison, setImmunities } from 'model/Immunities'
import { Item, Produce } from 'model/Items'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const Rhinoloupe: Item = {
  id: 'Rhinoloupe',
  name: 'Rhinoloupe',
  category: Produce,
  energy: 32,
  activate: activateRhinoloupe,
  relatedImmunities: () => [Poison],
  relatedWeaponAttributes: () => [Sharp],
  relatedEquipment: () => AllEquipment
}

function activateRhinoloupe(project: TemperingProject) {
  plus25Percent(project, Sharp)

  if (project.type === EquipmentProject) {
    setImmunities(project, Poison)
  }
}
