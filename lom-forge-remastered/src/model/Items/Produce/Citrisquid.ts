import { minus25Percent, plus25Percent } from 'model/Gear'
import { Slash, Strike } from 'model/Gear/Equipment'
import { Sharp, Heavy } from 'model/Gear/Weapons'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'

export const Citrisquid: ActiveItem = {
  id: 'Citrisquid',
  name: 'Citrisquid',
  category: Produce,
  energy: 8,
  activate: activateCitrisquid,
  relatedWeaponAttributes: () => [Sharp, Heavy],
  relatedEquipmentAttributes: () => [Slash, Strike]
}

function activateCitrisquid(project: TemperingProject) {
  minus25Percent(project, Sharp)
  plus25Percent(project, Heavy)

  minus25Percent(project, Slash)
  plus25Percent(project, Strike)
}
