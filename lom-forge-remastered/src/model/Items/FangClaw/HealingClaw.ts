import { Tower } from 'model/Cards'
import { Salamander, Wisp } from 'model/Essences'
import { Shield } from 'model/Gear/Equipment'
import { addImmunity, Poison } from 'model/Immunities'
import { ActiveItem } from 'model/Items'
import { FangClaw } from 'model/Items/FangClaw'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const HealingClaw: ActiveItem = {
  id: 'HealingClaw',
  name: 'Healing Claw',
  category: FangClaw,
  energy: 24,
  activate: activateHealingClaw,
  relatedCards: () => [Tower],
  relatedImmunities: () => [Poison],
  relatedEquipment: () => [Shield],
  relatedEssences: () => [Wisp, Salamander]
}

function activateHealingClaw(project: TemperingProject) {
  const { energy } = project
  const { wisp, salamander } = project.levels

  if (project.type === EquipmentProject && project.equipment === Shield) {
    addImmunity(project, Poison)
  }

  if (salamander === 0 && wisp > 0 && energy >= 8) {
    project.cards.pending = Tower
  }
}
