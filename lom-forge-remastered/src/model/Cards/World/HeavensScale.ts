import { ActiveCard, Bottom, CardSlot, Hidden, Middle, Top } from 'model/Cards'
import { BedOfThorn } from 'model/Cards/Stage'
import { AncientMoon, DyingEarth, MirroredWorld, Ragnarok, World, Yggdrasil } from 'model/Cards/World'
import { AllEquipment } from 'model/Gear/Equipment'
import { Springanana } from 'model/Items/Produce'
import { EquipmentProject, TemperingProject } from 'model/Projects'
import { NoReviveMoveHpRegeneration } from 'model/Specials'

export const HeavensScale: ActiveCard = {
  id: 'HeavensScale',
  name: "Heaven's Scale",
  category: World,
  price: 1800,
  activate: activateHeavensScale,
  relatedItems: () => [Springanana],
  relatedCards: () => [BedOfThorn, Yggdrasil, DyingEarth, Ragnarok, AncientMoon, MirroredWorld],
  relatedEquipment: () => AllEquipment,
  relatedSpecials: () => [NoReviveMoveHpRegeneration]
}

function activateHeavensScale(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Hidden:
      const { worldPower } = project

      if (worldPower !== undefined && worldPower !== BedOfThorn) {
        project.cards.hidden = undefined
      }

      break
    case Top:
    case Middle:
    case Bottom:
      if (project.type === EquipmentProject) {
        project.special = NoReviveMoveHpRegeneration
      }

      break
  }
}
