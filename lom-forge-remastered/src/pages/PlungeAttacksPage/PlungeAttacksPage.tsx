import { Card, CardContent, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import {
  Caduceus,
  ChaoticAvenger,
  FlamingArrow,
  GreenPrincess,
  Gungnir,
  Icicle,
  MagicalShot,
  MedusaArrow,
  PhoenixFalling,
  PlungeAttack,
  Shot,
  SolarFlare,
  SpearOfLight,
  Thrust,
  Trident
} from 'model/PlungeAttacks'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './PlungeAttacksPage.scss'

const PlungeAttackCard: React.FC<PlungeAttack> = plungeAttack => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="span" gutterBottom>
          {plungeAttack.originalName}
        </Typography>
        <Typography
          color="textSecondary"
          component="span"
          style={{
            float: 'right'
          }}
        >
          {plungeAttack.weapons.map((attack) => attack.originalName).join(', ')}
        </Typography>
        <List>
          {plungeAttack.effects.map((effect, index) => (
            <ListItem key={index}>
              <ListItemText>• {effect}</ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export const PlungeAttacksPage: React.FC<PlungeAttacksPageProps> = props => {
  const topSlotPlungeAttacks = [
    Thrust,
    Shot,
    Caduceus,
    ChaoticAvenger,
    FlamingArrow,
    GreenPrincess,
    Gungnir,
    Icicle,
    MagicalShot,
    MedusaArrow,
    PhoenixFalling,
    SolarFlare,
    SpearOfLight,
    Trident
  ]

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
      {topSlotPlungeAttacks.map((plungeAttack, index) => (
        <PlungeAttackCard key={index} {...plungeAttack} />
      ))}
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
