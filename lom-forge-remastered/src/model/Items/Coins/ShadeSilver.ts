import { Shade as ShadeCard } from 'model/Cards'
import { Shade, taint } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const ShadeSilver: Item = {
  id: 'ShadeSilver',
  name: 'Shade Silver',
  category: Coins,
  energy: 48,
  activate: activateShadeSilver,
  relatedCards: () => [ShadeCard],
  relatedEssences: () => [Shade]
}

function activateShadeSilver(project: TemperingProject) {
  taint(project, Shade)

  const { energy } = project

  if (energy >= 8) {
    project.mysticPowers.prehidden = ShadeCard
  }
}
