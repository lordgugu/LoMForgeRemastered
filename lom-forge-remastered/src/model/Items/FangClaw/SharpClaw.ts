import { GodOfDestruction } from 'model/Cards'
import { Heavy, minus50Percent, plus50Percent, Sharp } from 'model/Equipment'
import { Salamander, Undine } from 'model/Essences'
import { FangClaw, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const SharpClaw: Item = {
  id: 'SharpClaw',
  name: 'Sharp Claw',
  category: FangClaw,
  energy: 24,
  activate: activateSharpClaw,
  relatedCards: () => [GodOfDestruction],
  relatedWeaponAttributes: () => [Sharp, Heavy],
  relatedEssences: () => [Salamander, Undine]
}

function activateSharpClaw(project: TemperingProject) {
  const { energy } = project
  const { salamander, undine } = project.levels

  plus50Percent(project, Sharp)
  minus50Percent(project, Heavy)

  if (undine === 0 && salamander >= 5 && energy >= 8) {
    project.cards.pending = GodOfDestruction
  }
}
