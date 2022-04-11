import React, { useContext } from 'react'
import { BrowserRouter, Route, Switch, RouteComponentProps, Redirect } from 'react-router-dom'
import { AlertContext } from 'src/context/alert/alertContext'
import { Alert, AlertColor, Snackbar } from '@mui/material'
import appRoutes from './appRoutes'
import { SectorsContext } from 'src/context/sector/sectorContext'
import LoadingApp from 'src/components/LoadingApp'

const AppRouter = (): JSX.Element => {
  const { alertState, snackbar } = useContext(AlertContext)
  const { loading } = useContext(SectorsContext)

  if (loading) return <LoadingApp />

  return (
    <div>
      {snackbar && (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={snackbar}>
          <Alert severity={alertState.snackbarType as AlertColor}>{alertState.snackbarText}</Alert>
        </Snackbar>
      )}

      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/ranking/mpix" />} />
            {appRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps) => <route.component name={route.name} {...props} {...route.props} />}
                />
              )
            })}
            <Route exact path="/404" render={() => <h1>Not found!</h1>} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter
