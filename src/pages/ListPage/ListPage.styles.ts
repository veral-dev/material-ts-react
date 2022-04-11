import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const SubtitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#F0F4FB',
  minHeight: '96px',
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  '& .MuiButton-root': {
    marginRight: '125px',
    [theme.breakpoints.down('md')]: {
      height: '30px',
      marginRight: '0px'
    }
  },
  '& .subtitle-stack': {
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: '20px',
      marginBottom: '20px',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    flexDirection: 'row',
    alignItems: 'flex-end',
    '& .MuiStack-root': {}
  }
}))
