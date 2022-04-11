import React, { createContext, useReducer, useState, useContext, useEffect } from 'react'
import { AlertContext } from '../alert/alertContext'
import { getSectors } from 'src/services/app.services'
import { sectorsReducer } from './sectorsReducer'
import { SectorsType } from 'src/types/services.types'

export interface SectorsState {
  sectors: any | null
}

export interface SectorsContextProps {
  fetchSectors: () => void
  sectors: any | null
  loading: boolean | null
}

// Initial State
export const sectorsInitialState: SectorsState = {
  sectors: null
}

// Create context
export const SectorsContext = createContext({} as SectorsContextProps)

const SectorsProvider = ({ children }: any) => {
  const { showSnackbar } = useContext(AlertContext)

  const [sectorsState, dispatch] = useReducer(sectorsReducer, sectorsInitialState)
  const [loading, setLoading] = useState(true)

  const fetchSectors = async () => {
    setLoading(true)
    try {
      const sectors = await getSectors()

      dispatch({
        type: 'FETCH_SECTORS',
        payload: {
          sectors: sectors.map((sec: SectorsType) => {
            return { value: sec.id, label: sec.name_spanish }
          })
        }
      })
    } catch (error) {
      if (error instanceof Error) showSnackbar('error', error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSectors()
    return () => dispatch({ type: 'REMOVE_SECTORS' })
  }, [])

  return (
    <SectorsContext.Provider
      value={{
        sectors: sectorsState.sectors,
        fetchSectors,
        loading
      }}
    >
      {children}
    </SectorsContext.Provider>
  )
}

export default SectorsProvider
