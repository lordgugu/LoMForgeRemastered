import PrimaryMaterialIcon from '@iconify-icons/mdi/cube-outline'
import SecondaryMaterialIcon from '@iconify-icons/mdi/cube-send'
import HomeIcon from '@iconify-icons/mdi/mailbox'
import ArmorIcon from '@iconify-icons/mdi/shield'
import WeaponsIcon from '@iconify-icons/mdi/sword'
import PlungeAttacksIcon from '@iconify-icons/mdi/sword-cross'
import { Icon } from '@iconify/react'
import { Divider, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import { createStyles, makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

export const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerPaper: {
      width: drawerWidth
    }
  })
)

const LoMDrawer: React.FC<LoMDrawerProp> = props => {
  const { container } = props
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawerContent = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem component={Link} to={'/'}>
          <ListItemIcon>
            <Icon icon={HomeIcon} height="2em" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem component={Link} to={'/Weapons'}>
          <ListItemIcon>
            <Icon icon={WeaponsIcon} height="2em" />
          </ListItemIcon>
          <ListItemText primary="Weapons" />
        </ListItem>
        <ListItem component={Link} to={'/Armor'}>
          <ListItemIcon>
            <Icon icon={ArmorIcon} height="2em" />
          </ListItemIcon>
          <ListItemText primary="Armor" />
        </ListItem>
        <ListItem component={Link} to={'/Primary'}>
          <ListItemIcon>
            <Icon icon={PrimaryMaterialIcon} height="2em" />
          </ListItemIcon>
          <ListItemText primary="Primary Materials" />
        </ListItem>
        <ListItem component={Link} to={'/Secondary'}>
          <ListItemIcon>
            <Icon icon={SecondaryMaterialIcon} height="2em" />
          </ListItemIcon>
          <ListItemText primary="Secondary Materials" />
        </ListItem>
        <ListItem component={Link} to={'/PlungeAttacks'}>
          <ListItemIcon>
            <Icon icon={PlungeAttacksIcon} height="2em" />
          </ListItemIcon>
          <ListItemText primary="Plunge Attacks" />
        </ListItem>
      </List>
    </div>
  )

  return (
    <nav className={classes.drawer}>
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawerContent}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawerContent}
        </Drawer>
      </Hidden>
    </nav>
  )
}

LoMDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element)
}

interface LoMDrawerProp {
  container: any
}

export default LoMDrawer
