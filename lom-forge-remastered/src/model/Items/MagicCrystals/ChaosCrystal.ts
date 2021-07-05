import { AncientMoon } from 'model/Cards'
import { Item, MagicCrystals } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const ChaosCrystal: Item = {
  id: 'ChaosCrystal',
  name: 'Chaos Crystal',
  category: MagicCrystals,
  energy: 24,
  activate: activateChaosCrystal,
  relatedCards: () => [AncientMoon]
}

function activateChaosCrystal(project: TemperingProject) {
  const { energy } = project

  if (energy >= 16) {
    project.mysticPowers.prehidden = AncientMoon
  }
}
