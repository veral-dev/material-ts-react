import { Select } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CustomSelect = styled(Select)(({ theme }) => ({
  '& .MuiSelect-select': {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(0)
  },
  color: '#03234D',
  fontFamily: ' Graphik',
  fontWeight: 'normal',
  lineHeight: '24px',
  fontSize: '15px',
  letterSpacing: '0px',
  minWidth: '256px',
  height: '48px',
  borderRadius: '6px',
  backgroundColor: '#fff',
  marginTop: '8px',
  [theme.breakpoints.up('sm')]: {
    '& .MuiOutlinedInput-notchedOutline ': {
      borderWidth: '0px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',

    '& .MuiOutlinedInput-notchedOutline ': {
      borderColor: '#03234D'
    }
  }
}))
