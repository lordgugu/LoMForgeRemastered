import { SacrificedNymph } from 'model/Cards'
import { Item, Vials } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const GhostsHowl: Item = {
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
