import { Undine as UndineCard } from 'model/Cards/Element'
import { taint, Undine } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Coins } from 'model/Items/Coins'
import { TemperingProject } from 'model/Projects'

export const UndineGold: ActiveItem = {
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
    project.cards.pending = UndineCard
  }
}
