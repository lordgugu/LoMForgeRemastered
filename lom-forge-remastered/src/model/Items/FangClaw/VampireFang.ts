import { WitchOfMoon } from 'model/Cards'
import { Jinn, Undine } from 'model/Essences'
import { ActiveItem } from 'model/Items'
import { FangClaw } from 'model/Items/FangClaw'
import { TemperingProject } from 'model/Projects'
import { Charm, incrementStat, Spirit, widenStatRange } from 'model/Stats'

export const VampireFang: ActiveItem = {
  id: 'VampireFang',
  name: 'Vampire Fang',
  category: FangClaw,
  energy: 24,
  activate: activateVampireFang,
  relatedCards: () => [WitchOfMoon],
  relatedStats: () => [Charm, Spirit],
  relatedStatRanges: () => [Charm, Spirit],
  relatedEssences: () => [Jinn, Undine]
}

function activateVampireFang(project: TemperingProject) {
  const { energy } = project
  const { jinn, undine } = project.levels

  widenStatRange(project, Charm, -3, 5)
  widenStatRange(project, Spirit, -3, 5)

  incrementStat(project, Charm)
  incrementStat(project, Spirit)

  if (jinn === 0 && undine >= 5 && energy >= 8) {
    project.cards.pending = WitchOfMoon
  }
}
