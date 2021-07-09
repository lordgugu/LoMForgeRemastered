import { taint, Undine } from 'model/Essences'
import { minus25Percent, plus25Percent } from 'model/Gear'
import { Heavy, Sharp } from 'model/Gear/Weapons'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SpinyCarrot: Item = {
  id: 'SpinyCarrot',
  name: 'Spiny Carrot',
  category: Produce,
  energy: 8,
  activate: activateSpinyCarrot,
  relatedWeaponAttributes: () => [Sharp, Heavy],
  relatedEssences: () => [Undine]
}

function activateSpinyCarrot(project: TemperingProject) {
  plus25Percent(project, Sharp)
  minus25Percent(project, Heavy)

  taint(project, Undine)
}
