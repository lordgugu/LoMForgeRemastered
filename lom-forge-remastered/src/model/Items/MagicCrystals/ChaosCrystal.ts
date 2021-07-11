import { AncientMoon } from 'model/Cards/World'
import { ActiveItem } from 'model/Items'
import { MagicCrystals } from 'model/Items/MagicCrystals'
import { TemperingProject } from 'model/Projects'

export const ChaosCrystal: ActiveItem = {
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
    project.cards.pending = AncientMoon
  }
}
