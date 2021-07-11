import { MotherOfGods } from 'model/Cards/HeavenGod'
import { Gnome, Shade, Undine } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'
import { Charm, incrementStat, widenStatRange } from 'model/Stats'

export const HeartMint: ActiveItem = {
  id: 'HeartMint',
  name: 'Heart Mint',
  category: Produce,
  energy: 8,
  activate: activateHeartMint,
  relatedCards: () => [MotherOfGods],
  relatedStats: () => [Charm],
  relatedStatRanges: () => [Charm],
  relatedEssences: () => [Shade, Gnome, Undine]
}

function activateHeartMint(project: TemperingProject) {
  const { energy } = project
  const { shade, gnome, undine } = project.levels

  widenStatRange(project, Charm, -1, 3)
  incrementStat(project, Charm)

  if (shade >= 2 && gnome >= 2 && undine >= 2 && energy >= 8) {
    project.cards.pending = MotherOfGods
  }
}
