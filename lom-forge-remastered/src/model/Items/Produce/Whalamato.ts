import { Unicorn } from 'model/Cards'
import { Gnome, Undine } from 'model/Essences'
import { Item, Produce } from 'model/Items'
import { TemperingProject } from 'model/Projects'
import { HP, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const Whalamato: Item = {
  id: 'Whalamato',
  name: 'Whalamato',
  category: Produce,
  energy: 32,
  activate: activateWhalamato,
  relatedCards: () => [Unicorn],
  relatedStats: () => [HP],
  relatedEssences: () => [Gnome, Undine]
}

function activateWhalamato(project: TemperingProject) {
  const { energy } = project
  const { gnome, undine } = project.levels

  widenStatRange(project, HP, -5, 10)
  setMinimumStatValue(project, HP, 10)

  if (gnome >= 3 && undine >= 3 && energy >= 8) {
    project.cards.pending = Unicorn
  }
}
