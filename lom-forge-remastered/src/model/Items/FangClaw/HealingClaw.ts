import { Tower } from 'model/Cards'
import { Shield } from 'model/Gear/Equipment'
import { Salamander, Wisp } from 'model/Essences'
import { addImmunity, Poison } from 'model/Immunities'
import { FangClaw, Item } from 'model/Items'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const HealingClaw: Item = {
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
