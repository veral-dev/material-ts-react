import React, { createContext, useReducer } from 'react'
import { AlertColor } from '@mui/material'
import { alertReducer } from './alertReducer'

export interface AlertState {
  alertTitle: string | null
  alertMsg: string | null
  category: string | null
  snackbarText: string | null
  snackbarType: AlertColor | null
  auto?: boolean
}

export interface AlertContextProps {
  alert: boolean
  snackbar: boolean
  alertState: AlertState
  showAlert: (alertMsg: string, category: string, alertTitle: string, auto?: boolean) => void
  showSnackbar: (snackbarType: AlertColor, snackbarText: string) => void
  hideAlert: () => void
  hideSnackbar: () => void
}

// Initial State
export const alertInitialState: AlertState = {
  alertTitle: null,
  alertMsg: null,
  category: null,
  snackbarText: null,
  snackbarType: null,
  auto: false
}

// Create context
export const AlertContext = createContext({} as AlertContextProps)

const AlertProvider = ({ children }: any) => {
  const [alertState, dispatch] = useReducer(alertReducer, alertInitialState)

  const hideAlert = () => {
    dispatch({
      type: 'HIDE_ALERT'
    })
  }

  const showAlert = (alertTitle: string, alertMsg: string, category: string, auto?: boolean) => {
    dispatch({ type: 'SHOW_ALERT', payload: { alertMsg, category, alertTitle } })
    if (!auto) return
    setTimeout(() => {
      dispatch({
        type: 'HIDE_ALERT'
      })
    }, 5000)
  }

  const hideSnackbar = () => {
    dispatch({
      type: 'HIDE_SNACKBAR'
    })
  }

  const showSnackbar = (snackbarType: AlertColor, snackbarText: string) => {
    dispatch({ type: 'SHOW_SNACKBAR', payload: { snackbarText, snackbarType } })
    setTimeout(() => {
      dispatch({
        type: 'HIDE_SNACKBAR'
      })
    }, 4000)
  }

  return (
    <AlertContext.Provider
      value={{
        alert: !!alertState.alertTitle,
        snackbar: !!alertState.snackbarText,
        alertState,
        showAlert,
        showSnackbar,
        hideAlert,
        hideSnackbar
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}

export default AlertProvider
