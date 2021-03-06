import { BeastHeadedGod } from 'model/Cards/EvilGod'
import { Aura, Dryad } from 'model/Essences'
import { minus50Percent, plus50Percent } from 'model/Gear'
import { Force, Tech } from 'model/Gear/Weapons'
import { ActiveItem } from 'model/Items'
import { FangClaw } from 'model/Items/FangClaw'
import { TemperingProject } from 'model/Projects'

export const PoisonFang: ActiveItem = {
  id: 'PoisonFang',
  name: 'Poison Fang',
  category: FangClaw,
  energy: 8,
  activate: activatePoisonFang,
  relatedCards: () => [BeastHeadedGod],
  relatedWeaponAttributes: () => [Force, Tech],
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
