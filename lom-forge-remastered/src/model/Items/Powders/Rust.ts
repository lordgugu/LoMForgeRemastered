import { PixieOfSloth } from 'model/Cards/Pixie'
import { ActiveItem } from 'model/Items'
import { Powders } from 'model/Items/Powders'
import { TemperingProject } from 'model/Projects'

export const Rust: ActiveItem = {
  id: 'Rust',
  name: 'Rust',
  category: Powders,
  energy: 8,
  activate: activateRust,
  relatedCards: () => [PixieOfSloth]
}

function activateRust(project: TemperingProject) {
  const { energy } = project

  if (energy >= 4) {
    project.cards.pending = PixieOfSloth
  }
}
