import { SectorsState } from './sectorContext'
import { REMOVE_SECTORS, FETCH_SECTORS } from '../actions'

type SectorsAction = { type: 'FETCH_SECTORS'; payload: { sectors: any } } | { type: 'REMOVE_SECTORS' }

export const sectorsReducer = (state: SectorsState, action: SectorsAction): SectorsState => {
  switch (action.type) {
    case FETCH_SECTORS:
      return {
        ...state,
        sectors: action.payload.sectors
      }
    case REMOVE_SECTORS:
      return {
        ...state,
        sectors: null
      }
    default:
      return state
  }
}
