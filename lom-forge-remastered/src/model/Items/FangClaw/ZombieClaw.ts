import { Pendant } from 'model/Gear/Equipment'
import { addImmunity, Paralysis } from 'model/Immunities'
import { ActiveItem } from 'model/Items'
import { FangClaw } from 'model/Items/FangClaw'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const ZombieClaw: ActiveItem = {
  id: 'ZombieClaw',
  name: 'Zombie Claw',
  category: FangClaw,
  energy: 32,
  activate: activateZombieClaw,
  relatedImmunities: () => [Paralysis],
  relatedEquipment: () => [Pendant]
}

function activateZombieClaw(project: TemperingProject) {
  if (project.type === EquipmentProject && project.equipment === Pendant) {
    addImmunity(project, Paralysis)
  }
}
