import { PixieOfPride } from 'model/Cards'
import { plus25Percent } from 'model/Gear'
import { Slash } from 'model/Gear/Equipment'
import { ActiveItem } from 'model/Items'
import { Eyes } from 'model/Items/Eyes'
import { TemperingProject } from 'model/Projects'

export const LittleEye: ActiveItem = {
  id: 'LittleEye',
  name: 'Little Eye',
  category: Eyes,
  energy: 32,
  activate: activateLittleEye,
  relatedCards: () => [PixieOfPride],
  relatedEquipmentAttributes: () => [Slash]
}

function activateLittleEye(project: TemperingProject) {
  const { energy } = project

  plus25Percent(project, Slash)

  if (energy >= 4) {
    project.cards.pending = PixieOfPride
  }
}
