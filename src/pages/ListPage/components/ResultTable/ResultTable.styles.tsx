import { Box, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

export const UpdateStack = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  '> svg': {
    color: '#666666',
    width: '20px',
    height: '20px',
    marginRight: '5px'
  },
  '& .MuiTypography-root': {
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      fontFamily: 'Graphik-medium'
    }
  }
}))

export const BeforeTableBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '16px',
  paddingLeft: '16px',
  '> .MuiTypography-root': {
    [theme.breakpoints.down('sm')]: {
      fontSize: '11px',
      fontFamily: 'Graphik-medium'
    }
  }
}))

export const BoxTable = styled(Box)(({ theme }) => ({
  marginTop: '15px',
  [theme.breakpoints.up('sm')]: {
    paddingRight: '25px',
    paddingLeft: '25px'
  }
}))
