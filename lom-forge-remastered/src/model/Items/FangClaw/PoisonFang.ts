import { BeastHeadedGod } from 'model/Cards'
import { minus50Percent, plus50Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Aura, Dryad } from 'model/Essences'
import { FangClaw, Item } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

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

  if (project.type === WeaponProjectType) {
    const { force, technique } = project.attributes
    project.attributes.force = minus50Percent(force)
    project.attributes.technique = plus50Percent(technique)
  }

  if (aura === 0 && dryad >= 5 && energy >= 8) {
    project.cards.pending = BeastHeadedGod
  }
}
