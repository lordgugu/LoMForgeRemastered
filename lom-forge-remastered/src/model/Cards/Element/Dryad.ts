import { ActiveCard, Bottom, CardSlot, Middle, Top } from 'model/Cards'
import { Element } from 'model/Cards/Element'
import { Dryad as DryadEssence, taint } from 'model/Essences'
import { DryadGold, DryadSilver } from 'model/Items/Coins'
import { BigSeed, CrookedSeed, FlatSeed, LongSeed, OblongSeed, RoundSeed, SmallSeed } from 'model/Items/Seeds'
import { TemperingProject } from 'model/Projects'
import { HP, incrementStat } from 'model/Stats'

export const Dryad: ActiveCard = {
  id: 'Dryad',
  name: 'Dryad',
  category: Element,
  price: 250,
  activate: activateDryad,
  relatedItems: () => [
    DryadGold,
    DryadSilver,
    RoundSeed,
    OblongSeed,
    CrookedSeed,
    BigSeed,
    SmallSeed,
    LongSeed,
    FlatSeed
  ],
  relatedStats: () => [HP],
  relatedEssences: () => [DryadEssence]
}

function activateDryad(project: TemperingProject, slot: CardSlot) {
  switch (slot) {
    case Top:
    case Middle:
    case Bottom:
      incrementStat(project, HP)
      taint(project, DryadEssence)
      break
  }
}
