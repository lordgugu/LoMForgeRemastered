import { ActiveCard, Bottom, CardSlot, EvilGod, Leaving, Middle, PixieOfWrath, SacrificedNymph, Top } from 'model/Cards'
import { Ragnarok } from 'model/Cards/World'
import { AllEquipment } from 'model/Gear/Equipment'
import { Sword } from 'model/Gear/Weapons'
import { addImmunity, Freeze } from 'model/Immunities'
import { SharpClaw } from 'model/Items/FangClaw'
import { FlameTongue } from 'model/MasterMoves/MiddleSlot'
import { EquipmentProject, TemperingProject, WeaponProject } from 'model/Projects'
import { AllStats, decrementStat, Power, setMinimumStatValue, widenStatRange } from 'model/Stats'

export const GodOfDestruction: ActiveCard = {
  id: 'GodOfDestruction',
  name: 'God of Destruction',
  category: EvilGod,
  price: 6660,
  activate: activateGodOfDestruction,
  relatedItems: () => [SharpClaw],
  relatedCards: () => [PixieOfWrath, Ragnarok, SacrificedNymph],
  relatedStats: () => AllStats,
  relatedStatRanges: () => AllStats,
  relatedWeapons: () => [Sword],
  relatedMasterMoves: {
    middle: () => [FlameTongue]
  },
  relatedEquipment: () => AllEquipment,
  relatedImmunities: () => [Freeze]
}

function activateGodOfDestruction(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      AllStats.forEach((stat) => widenStatRange(project, stat, -10, 20))
      setMinimumStatValue(project, Power, 15)
      AllStats.forEach((stat) => decrementStat(project, stat))

      switch (project.type) {
        case WeaponProject:
          if (project.equipment == Sword) {
            project.masterMoves.middle = FlameTongue
          }
          break
        case EquipmentProject:
          addImmunity(project, Freeze)
          break
      }

      break
    case Leaving:
      const { top, middle, bottom } = project.cards

      if (bottom === SacrificedNymph) {
        project.cards.bottom = GodOfDestruction
      } else if (middle === SacrificedNymph) {
        project.cards.middle = GodOfDestruction
      } else if (top === SacrificedNymph) {
        project.cards.top = GodOfDestruction
      }

      break
  }
}
