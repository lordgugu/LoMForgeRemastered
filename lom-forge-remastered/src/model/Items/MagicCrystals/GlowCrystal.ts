import { NymphOfDawn } from 'model/Cards'
import { Item, MagicCrystals } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const GlowCrystal: Item = {
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
    project.mysticPowers.prehidden = NymphOfDawn
  }
}
