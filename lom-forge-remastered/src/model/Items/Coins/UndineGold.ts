import { Undine as UndineCard } from 'model/Cards'
import { taint, Undine } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const UndineGold: Item = {
  id: 'UndineGold',
  name: 'Undine Gold',
  category: Coins,
  energy: 64,
  activate: activateUndineGold,
  relatedCards: () => [UndineCard],
  relatedEssences: () => [Undine]
}

function activateUndineGold(project: TemperingProject) {
  taint(project, Undine)

  const { energy } = project

  if (energy >= 8) {
    project.mysticPowers.prehidden = UndineCard
  }
}
