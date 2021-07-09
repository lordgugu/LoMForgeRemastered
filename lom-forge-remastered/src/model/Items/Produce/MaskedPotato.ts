import { minus25Percent, plus25Percent } from 'model/Gear'
import { Heavy, Sharp } from 'model/Gear/Weapons'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const MaskedPotato: Item = {
  id: 'MaskedPotato',
  name: 'Masked Potato',
  category: Produce,
  energy: 24,
  activate: activateMaskedPotato,
  relatedWeaponAttributes: () => [Sharp, Heavy]
}

function activateMaskedPotato(project: TemperingProject) {
  minus25Percent(project, Sharp)
  plus25Percent(project, Heavy)
}
