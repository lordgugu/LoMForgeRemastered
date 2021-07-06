import { LordOfFlies } from 'model/Cards'
import { minus50Percent, plus50Percent } from 'model/Common'
import { AllWeapons } from 'model/Equipment'
import { Gnome, Jinn } from 'model/Essences'
import { Feathers, Item } from 'model/Items'
import { TemperingProject, WeaponProjectType } from 'model/Projects'

export const ClearFeather: Item = {
  id: 'ClearFeather',
  name: 'Clear Feather',
  category: Feathers,
  energy: 24,
  activate: activateClearFeather,
  relatedCards: () => [LordOfFlies],
  relatedWeapons: () => AllWeapons,
  relatedEssences: () => [Gnome, Jinn]
}

function activateClearFeather(project: TemperingProject) {
  const { energy } = project
  const { gnome, jinn } = project.levels

  if (project.type === WeaponProjectType) {
    const { heavy, tech } = project.attributes
    project.attributes.heavy = minus50Percent(heavy)
    project.attributes.tech = plus50Percent(tech)
  }

  if (gnome === 0 && jinn >= 5 && energy >= 8) {
    project.cards.pending = LordOfFlies
  }
}
