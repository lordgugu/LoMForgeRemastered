import { ActiveCard, Bottom, CardSlot, HeavenGod, Middle, Top } from 'model/Cards'
import { Spear, Staff } from 'model/Equipment'
import { SpadeBasil } from 'model/Items'
import { Electrosceptre, Gungnir } from 'model/MasterMoves'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
import { Magic, Power, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const RulerOfTheSky: ActiveCard = {
  id: 'RulerOfTheSky',
  name: 'Ruler of the Sky',
  category: HeavenGod,
  price: 5000,
  activate: activateRulerOfTheSky,
  relatedItems: () => [SpadeBasil],
  relatedStats: () => [Power, Magic],
  relatedStatRanges: () => [Power, Magic],
  relatedWeapons: () => [Spear, Staff],
  relatedMasterMoves: {
    top: () => [Gungnir],
    bottom: () => [Electrosceptre]
  }
}

function activateRulerOfTheSky(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Power, -3, 9)
      widenStatRange(project, Magic, -3, 9)

      setMinimumStatValue(project, Power, 9)
      setMinimumStatValue(project, Magic, 9)

      if (project.type === WeaponProjectType) {
        switch (project.equipment) {
          case Spear:
            project.masterMoves.top = Gungnir
            break
          case Staff:
            project.masterMoves.bottom = Electrosceptre
            break
        }
      }

      break
  }
}
