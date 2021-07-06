import { MirroredWorld } from 'model/Cards'
import { totalLevels } from 'model/Essences'
import { Item, Pouch } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const MirrorPiece: Item = {
  id: 'MirrorPiece',
  name: 'Mirror Piece',
  category: Pouch,
  energy: 24,
  activate: activateMirrorPiece,
  relatedCards: () => [MirroredWorld]
}

function activateMirrorPiece(project: TemperingProject) {
  const { energy } = project
  const total = totalLevels(project)

  if (total >= 3 && energy >= 8) {
    project.cards.pending = MirroredWorld
  }
}
