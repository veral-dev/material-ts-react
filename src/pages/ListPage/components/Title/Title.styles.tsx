import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const TitleBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
  [theme.breakpoints.up('sm')]: {
    borderTopLeftRadius: '8px'
  },
  backgroundColor: '#F0F4FB',
  width: '445px',
  height: '94px',
  display: 'flex',
  alignItems: 'center',
  '> svg': {
    marginLeft: '28px',
    color: '#D4D4D4',
    fontSize: '18px',
    ml: '28px'
  },
  '> .MuiBox-root': {
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(2)
    },
    marginLeft: '70px',
    width: '40px',
    height: '40px',
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    marginRight: theme.spacing(2)
  }
}))

export const MobileText = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    backgroundColor: '#F0F4FB',
    paddingBottom: '16px',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  '& .MuiTypography-root': {
    fontSize: '11px',
    lineHeight: '16px',
    color: '#9F9F9F',
    fontFamily: 'Graphik-medium'
  }
}))
