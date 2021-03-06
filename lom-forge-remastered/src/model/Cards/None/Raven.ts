import { Bottom, Card, CardSlot, Middle, Top } from 'model/Cards'
import { None } from 'model/Cards/None'
import { Bow } from 'model/Gear/Weapons'
import { RavenFeather } from 'model/Items/Feathers'
import { MagicalShot } from 'model/MasterMoves/TopSlot'
import { TemperingProject } from 'model/Projects'
import { Charm, Magic, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const Raven: Card = {
  id: 'Raven',
  name: 'Raven',
  category: None,
  price: 300,
  activate: activateRaven,
  relatedItems: () => [RavenFeather],
  relatedStats: () => [Magic, Charm],
  relatedStatRanges: () => [Magic, Charm],
  relatedWeapons: () => [Bow],
  relatedMasterMoves: {
    top: () => [MagicalShot]
  }
}

function activateRaven(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Magic, -3, 5)
      widenStatRange(project, Charm, -3, 5)

      setMinimumStatValue(project, Magic, 3)
      setMinimumStatValue(project, Charm, 3)

      break
  }
}
