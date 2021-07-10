import { Entity } from 'model/Common'
import { AllBottlesByForgeCode, AllBottlesById } from 'model/Items/Bottles'
import { AllCoinsByForgeCode, AllCoinsById } from 'model/Items/Coins'
import { AllEyesByForgeCode, AllEyesById } from 'model/Items/Eyes'
import { AllFangClawsByForgeCode, AllFangClawsById } from 'model/Items/FangClaw'
import { AllFeathersByForgeCode, AllFeathersById } from 'model/Items/Feathers'
import { AllMagicCrystalsByForgeCode, AllMagicCrystalsById } from 'model/Items/MagicCrystals'
import { AllMagicStonesByForgeCode, AllMagicStonesById } from 'model/Items/MagicStones'
import { AllMeatsByForgeCode, AllMeatsById } from 'model/Items/Meats'
import { AllNonesByForgeCode, AllNonesById } from 'model/Items/None'
import { AllPelletsByForgeCode, AllPelletsById } from 'model/Items/Pellets'
import { AllPouchesByForgeCode, AllPouchesById } from 'model/Items/Pouch'
import { AllPowdersByForgeCode, AllPowdersById } from 'model/Items/Powders'
import { AllProduceByForgeCode, AllProduceById } from 'model/Items/Produce'
import { AllSeedsByForgeCode, AllSeedsById } from 'model/Items/Seeds'
import { AllUrnsByForgeCode, AllUrnsById } from 'model/Items/Urns'
import { AllVialsByForgeCode, AllVialsById } from 'model/Items/Vials'
import { TemperingProject } from 'model/Projects'

export type ItemCategory =
  | 'Coins'
  | 'Magic Stones'
  | 'Magic Crystals'
  | 'Seeds'
  | 'Produce'
  | 'Meats'
  | 'Fang / Claw'
  | 'Eyes'
  | 'Feathers'
  | 'Bottles'
  | 'Vials'
  | 'Urns'
  | 'Pellets'
  | 'Powders'
  | 'Pouch'
  | undefined

export type Item = Entity & {
  readonly category: ItemCategory
  readonly energy: number
  readonly activate?: (project: TemperingProject) => void
}

export type ActiveItem = Item & {
  readonly activate: (project: TemperingProject) => void
}

export const AllItemsByForgeCode: { readonly [code: string]: Item } = {
  ...AllCoinsByForgeCode,
  ...AllMagicStonesByForgeCode,
  ...AllMagicCrystalsByForgeCode,
  ...AllSeedsByForgeCode,
  ...AllProduceByForgeCode,
  ...AllMeatsByForgeCode,
  ...AllFangClawsByForgeCode,
  ...AllEyesByForgeCode,
  ...AllFeathersByForgeCode,
  ...AllBottlesByForgeCode,
  ...AllVialsByForgeCode,
  ...AllUrnsByForgeCode,
  ...AllPelletsByForgeCode,
  ...AllPowdersByForgeCode,
  ...AllPouchesByForgeCode,
  ...AllNonesByForgeCode
}

export const AllItemsById: { [id: string]: Item } = {
  ...AllCoinsById,
  ...AllMagicStonesById,
  ...AllMagicCrystalsById,
  ...AllSeedsById,
  ...AllProduceById,
  ...AllMeatsById,
  ...AllFangClawsById,
  ...AllEyesById,
  ...AllFeathersById,
  ...AllBottlesById,
  ...AllVialsById,
  ...AllUrnsById,
  ...AllPelletsById,
  ...AllPowdersById,
  ...AllPouchesById,
  ...AllNonesById
}
