import { Aura as AuraCard } from 'model/Cards'
import { Aura, taint } from 'model/Essences'
import { Coins, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const AuraSilver: Item = {
  id: 'AuraSilver',
  name: 'Aura Silver',
  category: Coins,
  energy: 48,
  activate: activateAuraSilver,
  relatedCards: () => [AuraCard],
  relatedEssences: () => [Aura]
}

function activateAuraSilver(project: TemperingProject) {
  taint(project, Aura)

  const { energy } = project
  
  if (energy >= 8) {
    project.mysticPowers.prehidden = AuraCard
  }
}
