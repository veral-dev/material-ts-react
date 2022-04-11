import React from 'react'
import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'

export default function LoadingApp(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw'
      }}
    >
      <CircularProgress size={60} sx={{ mt: 3 }} color="primary" />
    </Box>
  )
}
