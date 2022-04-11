import { TableCell } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: '15px',
  color: '#0D0D0D',
  fontFamily: 'Graphik-Medium',
  '& svg': {
    color: '#999999',
    fontSize: '12px',
    marginLeft: '5px',
    marginTop: '4px'
  },
  '> div': {
    alignItems: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    backgroundColor: '#ECEEF3',
    paddingTop: '8px',
    paddingBottom: '8px'
  }
}))
