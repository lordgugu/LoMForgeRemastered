import { AllWeapons, Heavy, minus25Percent, plus25Percent, Sharp } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const MaskedPotato: Item = {
  id: 'MaskedPotato',
  name: 'Masked Potato',
  category: Produce,
  energy: 24,
  activate: activateMaskedPotato,
  relatedWeapons: () => AllWeapons
}

function activateMaskedPotato(project: TemperingProject) {
  minus25Percent(project, Sharp)
  plus25Percent(project, Heavy)
}
