import { Tower } from 'model/Cards'
import { Shield } from 'model/Equipment'
import { Salamander, Wisp } from 'model/Essences'
import { addImmunity, Poison } from 'model/Immunities'
import { FangClaw, Item } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const HealingClaw: Item = {
  id: 'HealingClaw',
  name: 'Healing Claw',
  category: FangClaw,
  energy: 24,
  activate: activateHealingClaw,
  relatedCards: () => [Tower],
  relatedImmunities: () => [Poison],
  relatedArmors: () => [Shield],
  relatedEssences: () => [Wisp, Salamander]
}

function activateHealingClaw(project: TemperingProject) {
  const { energy } = project
  const { wisp, sala } = project.levels

  if (project.type === ArmorProjectType && project.equipment === Shield) {
    addImmunity(project, Poison)
  }

  if (sala === 0 && wisp > 0 && energy >= 8) {
    project.mysticPowers.prehidden = Tower
  }
}
