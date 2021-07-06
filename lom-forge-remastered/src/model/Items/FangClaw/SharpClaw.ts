import { GodOfDestruction } from 'model/Cards'
import { minus50Percent, plus50Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Salamander, Undine } from 'model/Essences'
import { FangClaw, Item } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const SharpClaw: Item = {
  id: 'SharpClaw',
  name: 'Sharp Claw',
  category: FangClaw,
  energy: 24,
  activate: activateSharpClaw,
  relatedCards: () => [GodOfDestruction],
  relatedWeapons: () => AllWeapons,
  relatedEssences: () => [Salamander, Undine]
}

function activateSharpClaw(project: TemperingProject) {
  const { energy } = project
  const { sala, undine } = project.levels

  if (project.type === WeaponProjectType) {
    const { sharp, heavy } = project.attributes
    project.attributes.sharp = plus50Percent(sharp)
    project.attributes.heavy = minus50Percent(heavy)
  }

  if (undine === 0 && sala >= 5 && energy >= 8) {
    project.cards.pending = GodOfDestruction
  }
}
