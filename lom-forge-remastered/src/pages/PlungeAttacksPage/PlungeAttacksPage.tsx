import { Divider, Typography } from '@material-ui/core'
import { AllTopSlotMasterMoves } from 'model/MasterMoves/TopSlot'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './PlungeAttacksPage.scss'

export const PlungeAttacksPage: React.FC<PlungeAttacksPageProps> = (props) => {
  const topSlotPlungeAttacks = AllTopSlotMasterMoves

  return (
    <>
      <Typography variant="h5">Plunge Attacks</Typography>
      <Typography variant="body2">Plunge attacks are special abilities that can be used with a weapon:</Typography>
      <ul>
        <li>Each weapon has three slots for plunge attacks</li>
        <li>A plunge attack remains on a weapon until replaced by another in the same slot</li>
        <li>A plunge attack fills up the attack gauge twice as fast as a quick attack</li>
        <li>
          A plunge attack with <strong>Attack Gauge +</strong> fills up the attack gauge four times as fast as a quick
          attack
        </li>
        <li>
          A plunge attack with <strong>Attack Gauge &minus;</strong> fills up the attack gauge half as fast as a quick
          attack
        </li>
      </ul>
      <Divider />
      <Typography variant="h5">Top Slot</Typography>
      <Divider />
      <Typography variant="h5">Middle Slot</Typography>
      <Divider />
      <Typography variant="h5">Bottom Slot</Typography>
    </>
  )
}

interface PlungeAttacksPageProps extends RouteComponentProps<{ name: string }> {
  // TODO
}
