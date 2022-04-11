import { AlertColor } from '@mui/material'
import { AlertState } from './alertContext'
import { SHOW_ALERT, HIDE_ALERT, SHOW_SNACKBAR, HIDE_SNACKBAR } from '../actions'

type AlertAction =
  | { type: 'SHOW_ALERT'; payload: { alertMsg: string; category: string; alertTitle: string } }
  | { type: 'HIDE_ALERT' }
  | { type: 'SHOW_SNACKBAR'; payload: { snackbarText: string; snackbarType: AlertColor } }
  | { type: 'HIDE_SNACKBAR' }

export const alertReducer = (state: AlertState, action: AlertAction): AlertState => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alertMsg: action.payload.alertMsg,
        alertTitle: action.payload.alertTitle,
        category: action.payload.category
      }
    case HIDE_ALERT:
      return {
        ...state,
        alertMsg: null,
        alertTitle: null,
        category: null
      }
    case SHOW_SNACKBAR:
      return {
        ...state,
        snackbarText: action.payload.snackbarText,
        snackbarType: action.payload.snackbarType
      }
    case HIDE_SNACKBAR:
      return {
        ...state,
        snackbarText: null,
        snackbarType: null
      }
    default:
      return state
  }
}
