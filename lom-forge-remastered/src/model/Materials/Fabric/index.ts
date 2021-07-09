import { Material, MaterialCategory } from 'model/Materials'
import { AltenaFelt, JuddHemp, SultansSilk, ToppleCotton } from 'model/Materials/Fabric'

export const Fabric: MaterialCategory = 'Fabric'

export const AllFabrics: Material[] = [ToppleCotton, SultansSilk, JuddHemp, AltenaFelt]

export const AllFabricsByForgeCode: { [code: string]: Material } = {
  '36': ToppleCotton,
  '37': SultansSilk,
  '38': JuddHemp,
  '39': AltenaFelt
}

export const AllFabricsById: { [id: string]: Material } = Object.fromEntries(
  AllFabrics.map((fabric) => [fabric.id, fabric])
)

export * from './AltenaFelt'
export * from './JuddHemp'
export * from './SultansSilk'
export * from './ToppleCotton'
