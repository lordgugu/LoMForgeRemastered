import { plus25Percent } from 'model/Gear'
import { Heavy } from 'model/Gear/Weapons'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const GoldClover: Item = {
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
