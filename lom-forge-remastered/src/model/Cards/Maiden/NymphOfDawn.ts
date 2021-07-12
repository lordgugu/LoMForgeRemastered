import { ActiveCard, Bottom, CardSlot, Leaving, Middle } from 'model/Cards'
import { Maiden } from 'model/Cards/Maiden'
import { GlowCrystal } from 'model/Items/MagicCrystals'
import { TemperingProject } from 'model/Projects'

export const NymphOfDawn: ActiveCard = {
  id: 'NymphOfDawn',
  name: 'Nymph of Dawn',
  category: Maiden,
  price: 1000,
  activate: activateNymphOfDawn,
  relatedItems: () => [GlowCrystal]
}

function activateNymphOfDawn(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Middle:
    case Bottom:
      const { energy } = project

      if (energy <= 24) {
        project.cards[slot] = undefined
        project.energy += 192
      }

      break
    case Leaving:
      project.energy += 192

      break
  }
}
