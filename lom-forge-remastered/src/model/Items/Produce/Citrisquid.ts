import { Heavy, minus25Percent, plus25Percent, Sharp, Slash, Strike } from 'model/Equipment'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Citrisquid: Item = {
  id: 'Citrisquid',
  name: 'Citrisquid',
  category: Produce,
  energy: 8,
  activate: activateCitrisquid,
  relatedWeaponAttributes: () => [Sharp, Heavy],
  relatedArmorAttributes: () => [Slash, Strike]
}

function activateCitrisquid(project: TemperingProject) {
  minus25Percent(project, Sharp)
  plus25Percent(project, Heavy)

  minus25Percent(project, Slash)
  plus25Percent(project, Strike)
}
