import { Item, ItemCategory } from 'model/Items'
import {
  Applesocks,
  Apricat,
  Bellgrapes,
  Boarmelon,
  Bumpkin,
  Cabbadillo,
  CherryBombs,
  Citrisquid,
  Conchurnip,
  Cornflower,
  Dialaurel,
  Diceberry,
  FishyFruit,
  Garlicrown,
  GoldClover,
  HeartMint,
  HoneyOnion,
  Lilipods,
  LoquatShoe,
  Mangoelephant,
  MaskedPotato,
  MushInABox,
  Needlettuce,
  OrangeOpus,
  Orcaplant,
  PeachPuppy,
  PearOHeels,
  PineOClock,
  Rhinoloupe,
  RocketPapaya,
  SpadeBasil,
  SpinyCarrot,
  Springanana,
  Squalphin,
  SweetMoai,
  Toadstoolshed,
  Whalamato
} from 'model/Items/Produce'

export const Produce: ItemCategory = 'Produce'

export const AllProduce: Item[] = [
  Bellgrapes,
  Diceberry,
  Mangoelephant,
  LoquatShoe,
  PearOHeels,
  Squalphin,
  Citrisquid,
  Springanana,
  PeachPuppy,
  Apricat,
  Applesocks,
  Whalamato,
  PineOClock,
  FishyFruit,
  Boarmelon,
  Rhinoloupe,
  Orcaplant,
  Garlicrown,
  HoneyOnion,
  SweetMoai,
  SpinyCarrot,
  Conchurnip,
  Cornflower,
  Cabbadillo,
  Needlettuce,
  CherryBombs,
  MaskedPotato,
  Lilipods,
  RocketPapaya,
  OrangeOpus,
  Bumpkin,
  HeartMint,
  SpadeBasil,
  Dialaurel,
  GoldClover,
  MushInABox,
  Toadstoolshed
]

export const AllProduceByForgeCode: { [code: string]: Item } = {
  '33': Bellgrapes,
  '34': Diceberry,
  '35': Mangoelephant,
  '36': LoquatShoe,
  '37': PearOHeels,
  '38': Squalphin,
  '39': Citrisquid,
  '40': Springanana,
  '41': PeachPuppy,
  '42': Apricat,
  '43': Applesocks,
  '44': Whalamato,
  '45': PineOClock,
  '46': FishyFruit,
  '47': Boarmelon,
  '48': Rhinoloupe,
  '49': Orcaplant,
  '50': Garlicrown,
  '51': HoneyOnion,
  '52': SweetMoai,
  '53': SpinyCarrot,
  '54': Conchurnip,
  '55': Cornflower,
  '56': Cabbadillo,
  '57': Needlettuce,
  '58': CherryBombs,
  '59': MaskedPotato,
  '60': Lilipods,
  '61': RocketPapaya,
  '62': OrangeOpus,
  '63': Bumpkin,
  '64': HeartMint,
  '65': SpadeBasil,
  '66': Dialaurel,
  '67': GoldClover,
  '68': MushInABox,
  '69': Toadstoolshed
}

export const AllProduceById: { [id: string]: Item } = Object.fromEntries(
  AllProduce.map((produce) => [produce.id, produce])
)

export * from './Applesocks'
export * from './Apricat'
export * from './Bellgrapes'
export * from './Boarmelon'
export * from './Bumpkin'
export * from './Cabbadillo'
export * from './CherryBombs'
export * from './Citrisquid'
export * from './Conchurnip'
export * from './Cornflower'
export * from './Dialaurel'
export * from './Diceberry'
export * from './FishyFruit'
export * from './Garlicrown'
export * from './GoldClover'
export * from './HeartMint'
export * from './HoneyOnion'
export * from './Lilipods'
export * from './LoquatShoe'
export * from './Mangoelephant'
export * from './MaskedPotato'
export * from './MushInABox'
export * from './Needlettuce'
export * from './OrangeOpus'
export * from './Orcaplant'
export * from './PeachPuppy'
export * from './PearOHeels'
export * from './PineOClock'
export * from './Rhinoloupe'
export * from './RocketPapaya'
export * from './SpadeBasil'
export * from './SpinyCarrot'
export * from './Springanana'
export * from './Squalphin'
export * from './SweetMoai'
export * from './Toadstoolshed'
export * from './Whalamato'
