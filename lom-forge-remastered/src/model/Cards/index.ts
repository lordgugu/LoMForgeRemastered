export type CardCategory =
  | {
      name:
        | 'World'
        | 'Stage'
        | 'Heaven God'
        | 'Evil God'
        | 'Noble'
        | 'Maiden'
        | 'Spirit'
        | 'Pixie'
        | 'Beast God'
        | 'Element'
    }
  | undefined

export type CardProps = {
  readonly originalName: string
  readonly remasteredName?: string
  readonly category: CardCategory
  readonly price: number
}

export type MysticPowerSlot = 'prehidden' | 'hidden' | 'top' | 'middle' | 'bottom' | 'leaving'

export * from './BeastGod'
export * from './Element'
export * from './EvilGod'
export * from './HeavenGod'
export * from './Maiden'
export * from './Noble'
export * from './None'
export * from './Pixie'
export * from './Spirit'
export * from './Stage'
export * from './World'
