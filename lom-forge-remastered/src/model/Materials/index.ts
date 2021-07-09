import { Entity } from 'model/Common'
import { Resistances } from 'model/Essences'
import { EquipmentAttributes } from 'model/Gear/Equipment'
import { WeaponAttributes } from 'model/Gear/Weapons'
import { AllAerolitesByForgeCode, AllAerolitesById } from 'model/Materials/Aerolite'
import { AllBonesByForgeCode, AllBonesById } from 'model/Materials/Bone'
import { AllFabricsByForgeCode, AllFabricsById } from 'model/Materials/Fabric'
import { AllHidesByForgeCode, AllHidesById } from 'model/Materials/Hide'
import { AllMetalsByForgeCode, AllMetalsById } from 'model/Materials/Metal'
import { AllNonesByForgeCode, AllNonesById } from 'model/Materials/None'
import { AllScalesByForgeCode, AllScalesById } from 'model/Materials/Scales'
import { AllStonesByForgeCode, AllStonesById } from 'model/Materials/Stone'
import { AllWoodsByForgeCode, AllWoodsById } from 'model/Materials/Wood'
import { TemperingProject } from 'model/Projects'

export type MaterialCategory =
  | 'Metal'
  | 'Wood'
  | 'Stone'
  | 'Hide'
  | 'Scales'
  | 'Bone'
  | 'Fabric'
  | 'Aerolite'
  | undefined

export type Material = Entity & {
  readonly category: MaterialCategory
  readonly growthControl: number
  readonly weaponAttributes: WeaponAttributes
  readonly equipmentAttributes: EquipmentAttributes
  readonly resistances: Resistances
  readonly priceCoefficient: number
  readonly activate?: (project: TemperingProject) => void
}

export const AllMaterials: { readonly [key: string]: Material } = {
  ...AllMetalsByForgeCode,
  ...AllWoodsByForgeCode,
  ...AllStonesByForgeCode,
  ...AllHidesByForgeCode,
  ...AllScalesByForgeCode,
  ...AllBonesByForgeCode,
  ...AllFabricsByForgeCode,
  ...AllAerolitesByForgeCode,
  ...AllNonesByForgeCode
}

export const AllMaterialsById: { [id: string]: Material } = {
  ...AllMetalsById,
  ...AllWoodsById,
  ...AllStonesById,
  ...AllHidesById,
  ...AllScalesById,
  ...AllBonesById,
  ...AllFabricsById,
  ...AllAerolitesById,
  ...AllNonesById
}
