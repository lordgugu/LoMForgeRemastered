import { Box, createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { AppBar, Drawer } from './components'
import { HomePage } from './pages/HomePage/HomePage'
import { PlungeAttacksPage } from './pages/PlungeAttacksPage/PlungeAttacksPage'

const theme = createMuiTheme()

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const AppRouter: React.FC = () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Box id='drawer-container' className={classes.root}>
        <CssBaseline />
        <AppBar />
        <BrowserRouter>
          <RecoilRoot>
            <Suspense fallback={<span>Loading...</span>}>
              <Drawer container={document.getElementById('drawer-container')} />
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                  {/* Home */}
                  <Route exact path="/" component={HomePage} />
                  {/* Guides */}
                  <Route path="/Process" component={HomePage} />
                  <Route path="/Essences" component={HomePage} />
                  <Route path="/Abilities" component={HomePage} />
                  <Route path="/Stats" component={HomePage} />
                  <Route path="/Lucre" component={HomePage} />
                  <Route path="/Abilities" component={HomePage} />
                  <Route path="/Varnishing" component={HomePage} />
                  {/* Lists */}
                  <Route path="/Weapons" component={HomePage} />
                  <Route path="/Armor" component={HomePage} />
                  <Route path="/Primary" component={HomePage} />
                  <Route path="/Secondary" component={HomePage} />
                  <Route path="/PlungeAttacks" component={PlungeAttacksPage} />
                  <Route path="/Cards" component={HomePage} />
                </Switch>
              </main>
            </Suspense>
          </RecoilRoot>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default AppRouter
