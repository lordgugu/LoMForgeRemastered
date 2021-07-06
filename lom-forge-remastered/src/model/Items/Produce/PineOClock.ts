import { Ragnarok } from 'model/Cards'
import { AllArmors } from 'model/Equipment'
import { Gnome, Jinn, Salamander, Undine } from 'model/Essences'
import { setImmunities, Sleep } from 'model/Immunities'
import { Item, Produce } from 'model/Items'
import { ArmorProjectType, TemperingProject } from 'model/Projects'

export const PineOClock: Item = {
  id: 'PineOClock',
  name: "Pine o'Clock",
  category: Produce,
  energy: 24,
  activate: activatePineOClock,
  relatedArmors: () => AllArmors,
  relatedImmunities: () => [Sleep],
  relatedCards: () => [Ragnarok],
  relatedEssences: () => [Salamander, Gnome, Jinn, Undine]
}

function activatePineOClock(project: TemperingProject) {
  const { energy } = project
  const { sala, gnome, jinn, undine } = project.levels

  if (project.type === ArmorProjectType) {
    setImmunities(project, Sleep)
  }

  if (sala * gnome * jinn * undine > 0 && energy >= 8) {
    project.cards.pending = Ragnarok
  }
}
