import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0759E6'
    },
    secondary: {
      main: '#fe3974'
    }
  },
  typography: {
    fontFamily: ['Graphik', 'Noto Sans', 'Arial'].join(','),
    h2: {
      color: '#FF3974',
      fontFamily: 'Graphik-medium',
      fontSize: '24px'
    },
    h4: {
      color: '#FF6B97',
      fontSize: '14px',
      lineHeight: '24px'
    },
    caption: {
      color: '#666666',
      fontSize: '16px',
      lineHeight: '24px',
      textTransform: 'uppercase'
    },
    body1: {
      lineHeight: '24px',
      color: '#03234D',
      fontSize: '15px',
      fontFamily: 'Graphik'
    },
    body2: {
      color: '#666666',
      fontSize: '14px',
      lineHeight: '24px'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '12px',
          lineHeight: '24px',
          borderRadius: '24px',
          boxShadow: 'none',
          fontWeight: 600,
          height: '42px',
          '&:hover': { boxShadow: 'none' }
        }
      }
    }
  }
})
