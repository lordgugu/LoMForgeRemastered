import { NymphOfDawn } from 'model/Cards'
import { ActiveItem } from 'model/Items'
import { MagicCrystals } from 'model/Items/MagicCrystals'
import { TemperingProject } from 'model/Projects'

export const GlowCrystal: ActiveItem = {
  id: 'GlowCrystal',
  name: 'Glow Crystal',
  category: MagicCrystals,
  energy: 96,
  activate: activateGlowCrystal,
  relatedCards: () => [NymphOfDawn]
}

function activateGlowCrystal(project: TemperingProject) {
  const { energy } = project

  if (energy >= 16) {
    project.cards.pending = NymphOfDawn
  }
}
