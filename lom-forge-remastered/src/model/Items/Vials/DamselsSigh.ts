import { GoddessOfLove } from 'model/Cards'
import { Dryad, Shade } from 'model/Essences'
import { Item, Vials } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const DamselsSigh: Item = {
  id: 'DamselsSigh',
  originalName: "Virgin's Sigh",
  remasteredName: "Damsel's Sigh",
  category: Vials,
  energy: 16,
  activate: activateDamselsSigh,
  relatedCards: () => [GoddessOfLove],
  relatedEssences: () => [Shade, Dryad]
}

function activateDamselsSigh(project: TemperingProject) {
  const { energy } = project
  const { shade, dryad } = project.levels

  if (shade >= 3 && dryad >= 3 && energy >= 8) {
    project.cards.pending = GoddessOfLove
  }
}
