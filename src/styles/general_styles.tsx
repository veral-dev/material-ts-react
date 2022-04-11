import { styled } from '@mui/material/styles'
import { Box, Container, IconButton } from '@mui/material'

export const IconBox = styled(IconButton)(() => ({
  width: 32,
  height: 32,
  backgroundColor: '#fff',
  color: '#000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%'
}))

export const IconTitle = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%'
}))

export const ContainerApp = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    marginTop: '0px',
    padding: '0px'
  }
}))
