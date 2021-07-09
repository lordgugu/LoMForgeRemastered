import { Material, MaterialCategory } from 'model/Materials'
import { GaiasTears, Marble, Obsidian, PedanStone } from 'model/Materials/Stone'

export const Stone: MaterialCategory = 'Stone'

export const AllStones: Material[] = [Marble, Obsidian, PedanStone, GaiasTears]

export const AllStonesByForgeCode: { [code: string]: Material } = {
  '20': Marble,
  '21': Obsidian,
  '22': PedanStone,
  '23': GaiasTears
}

export const AllStonesById: { [id: string]: Material } = Object.fromEntries(
  AllStones.map((stones) => [stones.id, stones])
)

export * from './GaiasTears'
export * from './Marble'
export * from './Obsidian'
export * from './PedanStone'
