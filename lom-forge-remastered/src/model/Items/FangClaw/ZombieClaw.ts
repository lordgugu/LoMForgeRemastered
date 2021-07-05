import { Pendant } from 'model/Equipment'
import { addImmunity, Paralysis } from 'model/Immunities'
import { FangClaw, Item } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const ZombieClaw: Item = {
  id: 'ZombieClaw',
  name: 'Zombie Claw',
  category: FangClaw,
  energy: 32,
  activate: activateZombieClaw,
  relatedImmunities: () => [Paralysis],
  relatedArmors: () => [Pendant]
}

function activateZombieClaw(project: TemperingProject) {
  if (project.type === ArmorProjectType && project.equipment === Pendant) {
    addImmunity(project, Paralysis)
  }
}
