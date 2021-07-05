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
    const { sharpness, weight } = project.attributes
    project.attributes.sharpness = plus50Percent(sharpness)
    project.attributes.weight = minus50Percent(weight)
  }

  if (undine === 0 && sala >= 5 && energy >= 8) {
    project.mysticPowers.prehidden = GodOfDestruction
  }
}
