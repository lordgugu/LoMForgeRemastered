import { minus25Percent, plus25Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const MaskedPotato: Item = {
  id: 'MaskedPotato',
  name: 'Masked Potato',
  category: Produce,
  energy: 24,
  activate: activateMaskedPotato,
  relatedWeapons: () => AllWeapons
}

function activateMaskedPotato(project: TemperingProject) {
  if (project.type === WeaponProjectType) {
    const { sharp, heavy } = project.attributes
    project.attributes.sharp = minus25Percent(sharp)
    project.attributes.heavy = plus25Percent(heavy)
  }
}
