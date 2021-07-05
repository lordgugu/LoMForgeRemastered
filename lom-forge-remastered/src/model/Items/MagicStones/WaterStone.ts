import { Undine as UndineCard } from 'model/Cards'
import { taint, Undine } from 'model/Essences'
import { Item, MagicStones } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const WaterStone: Item = {
  id: 'WaterStone',
  name: 'Water Stone',
  category: MagicStones,
  energy: 24,
  activate: activateWaterStone,
  relatedCards: () => [UndineCard],
  relatedEssences: () => [Undine]
}

function activateWaterStone(project: TemperingProject) {
  taint(project, Undine)

  const { energy } = project

  if (energy >= 8) {
    project.mysticPowers.prehidden = UndineCard
  }
}
