import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import { DrawerWidth } from '..'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      marginLeft: DrawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${DrawerWidth}px)`,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  })
)

const LoMAppBar: React.FC<LoMAppBarProp> = (props) => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" noWrap>
          LoM Forge Remastered
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default LoMAppBar

interface LoMAppBarProp {
  // TODO
}
