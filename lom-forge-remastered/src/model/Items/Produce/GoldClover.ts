import { plus25Percent } from 'model/Gear'
import { Heavy } from 'model/Gear/Weapons'
import { ActiveItem } from 'model/Items'
import { Produce } from 'model/Items/Produce'
import { TemperingProject } from 'model/Projects'

export const GoldClover: ActiveItem = {
  id: 'GoldClover',
  name: 'Gold Clover',
  category: Produce,
  energy: 64,
  activate: activateGoldClover,
  relatedWeaponAttributes: () => [Heavy]
}

function activateGoldClover(project: TemperingProject) {
  plus25Percent(project, Heavy)
}
