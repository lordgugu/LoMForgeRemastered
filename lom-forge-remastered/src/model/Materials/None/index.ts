import { Material, MaterialCategory } from 'model/Materials'
import { Adamantite, Coral, Emerald, Fullmetal, LapisLazuli, Pearl, Shell, TortoiseShell } from 'model/Materials/None'

export const None: MaterialCategory = undefined

export const AllNones: Material[] = [Adamantite, Fullmetal, Coral, TortoiseShell, Shell, Emerald, Pearl, LapisLazuli]

export const AllNonesByForgeCode: { [code: string]: Material } = {
  '48': Adamantite,
  '49': Fullmetal,
  '50': Coral,
  '51': TortoiseShell,
  '52': Shell,
  '53': Emerald,
  '54': Pearl,
  '55': LapisLazuli
}

export const AllNonesById: { [id: string]: Material } = Object.fromEntries(AllNones.map((none) => [none.id, none]))

export * from './Adamantite'
export * from './Coral'
export * from './Emerald'
export * from './Fullmetal'
export * from './LapisLazuli'
export * from './Pearl'
export * from './Shell'
export * from './TortoiseShell'
