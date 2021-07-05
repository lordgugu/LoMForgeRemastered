import { MotherOfGods } from 'model/Cards'
import { Gnome, Shade, Undine } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { Charm, incrementStat, widenStatRange } from 'model/Stats'

export const HeartMint: Item = {
  id: 'HeartMint',
  name: 'Heart Mint',
  category: Produce,
  energy: 8,
  activate: activateHeartMint,
  relatedCards: () => [MotherOfGods],
  relatedStats: () => [Charm],
  relatedEssences: () => [Shade, Gnome, Undine]
}

function activateHeartMint(project: TemperingProject) {
  const { energy } = project
  const { shade, gnome, undine } = project.levels

  widenStatRange(project, Charm, -1, 3)
  incrementStat(project, Charm)

  if (shade >= 2 && gnome >= 2 && undine >= 2 && energy >= 8) {
    project.mysticPowers.prehidden = MotherOfGods
  }
}
