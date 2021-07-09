import { ActiveCard, Bottom, CardSlot, HeavenGod, Middle, Top } from 'model/Cards'
import { Bow, Sword } from 'model/Equipment'
import { MoonCrystal } from 'model/Items'
import { Moonlight } from 'model/MasterMoves/BottomSlot'
import { LunarShot } from 'model/MasterMoves/MiddleSlot'
import { TemperingProject, WeaponProjectType } from 'model/Projects'
import { setMinimumStatValue, Spirit, widenStatRange } from 'model/Stats'

export const MoonGoddess: ActiveCard = {
  id: 'MoonGoddess',
  name: 'Moon Goddess',
  category: HeavenGod,
  price: 3000,
  activate: activateMoonGoddess,
  relatedItems: () => [MoonCrystal],
  relatedStats: () => [Spirit],
  relatedStatRanges: () => [Spirit],
  relatedWeapons: () => [Sword, Bow],
  relatedMasterMoves: {
    middle: () => [LunarShot],
    bottom: () => [Moonlight]
  }
}

function activateMoonGoddess(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      widenStatRange(project, Spirit, -5, 10)
      setMinimumStatValue(project, Spirit, 10)

      if (project.type === WeaponProjectType) {
        switch (project.equipment) {
          case Sword:
            project.masterMoves.bottom = Moonlight
            break
          case Bow:
            project.masterMoves.middle = LunarShot
            break
        }
      }
      break
  }
}
