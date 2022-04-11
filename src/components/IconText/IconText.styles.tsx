import { Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

export const IconTextStack = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  '& .MuiTypography-root': {
    fontSize: '10px',
    lineHeight: '10px',
    textTransform: 'uppercase',
    color: '#03234D',
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}))
