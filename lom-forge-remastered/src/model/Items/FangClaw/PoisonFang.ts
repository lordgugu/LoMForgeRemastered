import { BeastHeadedGod } from 'model/Cards'
import { AllWeapons, Force, minus50Percent, plus50Percent, Tech } from 'model/Equipment'
import { Aura, Dryad } from 'model/Essences'
import { FangClaw, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const PoisonFang: Item = {
  id: 'PoisonFang',
  name: 'Poison Fang',
  category: FangClaw,
  energy: 8,
  activate: activatePoisonFang,
  relatedCards: () => [BeastHeadedGod],
  relatedWeapons: () => AllWeapons,
  relatedEssences: () => [Dryad, Aura]
}

function activatePoisonFang(project: TemperingProject) {
  const { energy } = project
  const { dryad, aura } = project.levels

  minus50Percent(project, Force)
  plus50Percent(project, Tech)

  if (aura === 0 && dryad >= 5 && energy >= 8) {
    project.cards.pending = BeastHeadedGod
  }
}
