import React from 'react'
import './App.css'
import AppRouter from './routes/app.router'
import AlertProvider from './context/alert/alertContext'
import SectorsProvider from './context/sector/sectorContext'
import { theme } from './styles/theme'
import { ThemeProvider } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AlertProvider>
        <SectorsProvider>
          <AppRouter />
        </SectorsProvider>
      </AlertProvider>
    </ThemeProvider>
  )
}

export default App
