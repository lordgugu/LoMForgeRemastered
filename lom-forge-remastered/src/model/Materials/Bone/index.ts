import { Material, MaterialCategory } from 'model/Materials'
import { AnimalBone, CursedBone, Fossil, Ivory } from 'model/Materials/Bone'

export const Bone: MaterialCategory = 'Bone'

export const AllBones: Material[] = [AnimalBone, Ivory, CursedBone, Fossil]

export const AllBonesByForgeCode: { [code: string]: Material } = {
  '32': AnimalBone,
  '33': Ivory,
  '34': CursedBone,
  '35': Fossil
}

export const AllBonesById: { [id: string]: Material } = Object.fromEntries(AllBones.map((bone) => [bone.id, bone]))

export * from './AnimalBone'
export * from './CursedBone'
export * from './Fossil'
export * from './Ivory'
