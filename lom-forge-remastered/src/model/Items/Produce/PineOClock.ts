import { Ragnarok } from 'model/Cards'
import { Gnome, Jinn, Salamander, Undine } from 'model/Essences'
import { AllEquipment } from 'model/Gear/Equipment'
import { setImmunities, Sleep } from 'model/Immunities'
import { Item, Produce } from 'model/Items'
import { EquipmentProject, TemperingProject } from 'model/Projects'

export const PineOClock: Item = {
  id: 'PineOClock',
  name: "Pine o'Clock",
  category: Produce,
  energy: 24,
  activate: activatePineOClock,
  relatedEquipment: () => AllEquipment,
  relatedImmunities: () => [Sleep],
  relatedCards: () => [Ragnarok],
  relatedEssences: () => [Salamander, Gnome, Jinn, Undine]
}

function activatePineOClock(project: TemperingProject) {
  const { energy } = project
  const { salamander, gnome, jinn, undine } = project.levels

  if (project.type === EquipmentProject) {
    setImmunities(project, Sleep)
  }

  if (salamander * gnome * jinn * undine > 0 && energy >= 8) {
    project.cards.pending = Ragnarok
  }
}
