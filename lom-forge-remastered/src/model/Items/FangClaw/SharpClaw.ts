import { GodOfDestruction } from 'model/Cards'
import { Salamander, Undine } from 'model/Essences'
import { minus50Percent, plus50Percent } from 'model/Gear'
import { Heavy, Sharp } from 'model/Gear/Weapons'
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
