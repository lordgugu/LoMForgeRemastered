import { Undine as UndineCard } from 'model/Cards'
import { taint, Undine } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const UndineSilver: Item = {
  id: 'UndineSilver',
  name: 'Undine Silver',
  category: Coins,
  energy: 48,
  activate: activateUndineSilver,
  relatedCards: () => [UndineCard],
  relatedEssences: () => [Undine]
}

function activateUndineSilver(project: TemperingProject) {
  taint(project, Undine)

  const { energy } = project
  
  if (energy >= 8) {
    project.cards.pending = UndineCard
  }
}
