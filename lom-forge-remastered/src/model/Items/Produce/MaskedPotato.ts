import { minus25Percent, plus25Percent } from 'model/Gear'
import { Heavy, Sharp } from 'model/Gear/Weapons'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'

export const MaskedPotato: ActiveItem = {
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
