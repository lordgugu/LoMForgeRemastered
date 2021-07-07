import { LordOfFlies } from 'model/Cards'
import { Heavy, minus50Percent, plus50Percent, Tech } from 'model/Equipment'
import { Gnome, Jinn } from 'model/Essences'
import { Feathers, Item } from 'model/Items'
import { TemperingProject } from 'model/Projects'

export const ClearFeather: Item = {
  id: 'ClearFeather',
  name: 'Clear Feather',
  category: Feathers,
  energy: 24,
  activate: activateClearFeather,
  relatedCards: () => [LordOfFlies],
  relatedWeaponAttributes: () => [Heavy, Tech],
  relatedEssences: () => [Gnome, Jinn]
}

function activateClearFeather(project: TemperingProject) {
  const { energy } = project
  const { gnome, jinn } = project.levels

  minus50Percent(project, Heavy)
  plus50Percent(project, Tech)

  if (gnome === 0 && jinn >= 5 && energy >= 8) {
    project.cards.pending = LordOfFlies
  }
}
