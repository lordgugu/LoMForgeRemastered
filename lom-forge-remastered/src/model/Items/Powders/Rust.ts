import { PixieOfSloth } from 'model/Cards'
import { Item, Powders } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const Rust: Item = {
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
