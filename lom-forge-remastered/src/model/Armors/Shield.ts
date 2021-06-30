import { ArmorProps } from 'model/Armors'

export const Shield: ArmorProps = {
  id: 12,
  originalName: 'Shield',
  attributes: {
    strike: 8,
    slash: 8,
    pierce: 8,
    magic: 4
  },
  markerThreshold: 1,
  priceCoefficient: 10
}
