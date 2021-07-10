import { SacrificedNymph } from 'model/Cards'
import { ActiveItem } from 'model/Items'
import { Vials } from 'model/Items/Vials'
import { TemperingProject } from 'model/Projects'

export const GhostsHowl: ActiveItem = {
  id: 'GhostsHowl',
  name: "Ghost's Howl",
  category: Vials,
  energy: 32,
  activate: activateGhostsHowl,
  relatedCards: () => [SacrificedNymph]
}

function activateGhostsHowl(project: TemperingProject) {
  const { energy } = project

  if (energy >= 8) {
    project.cards.pending = SacrificedNymph
  }
}
