import { ActiveCard, Bottom, CardSlot, HeavenGod, Middle, Top } from 'model/Cards'
import { Bow, Sword } from 'model/Equipment'
import { SunCrystal } from 'model/Items'
import { SolarFlare, Sunlight } from 'model/MasterMoves'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
import { Charm, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const SunGod: ActiveCard = {
  id: 'SunGod',
  name: 'Sun God',
  category: HeavenGod,
  price: 3000,
  activate: activateSunGod,
  relatedItems: () => [SunCrystal],
  relatedStats: () => [Charm],
  relatedStatRanges: () => [Charm],
  relatedWeapons: () => [Sword, Bow],
  relatedMasterMoves: {
    top: () => [SolarFlare],
    middle: () => [Sunlight]
  }
}

function activateSunGod(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Charm, -5, 10)
      setMinimumStatValue(project, Charm, 10)

      if (project.type === WeaponProjectType) {
        switch (project.equipment) {
          case Sword:
            project.masterMoves.middle = Sunlight
            break
          case Bow:
            project.masterMoves.top = SolarFlare
            break
        }
      }
      break
  }
}
