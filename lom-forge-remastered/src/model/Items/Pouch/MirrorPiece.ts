import { MirroredWorld } from 'model/Cards/World'
import { totalLevels } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Pouch } from 'model/Items/Pouch'
import { TemperingProject } from 'model/Projects'

export const MirrorPiece: ActiveItem = {
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
