import React from 'react'
import { Hidden, Stack, Typography } from '@mui/material'

// Styles
import { IconTitle } from 'src/styles/general_styles'
import { MobileText, TitleBox } from './Title.styles'

// Icons
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

export default function Title() {
  return (
    <>
      <TitleBox>
        <IconTitle>
          <EmojiEventsOutlinedIcon />
        </IconTitle>
        <Stack>
          <Stack direction="row">
            <Typography variant="h4">MPIx </Typography>
            <Typography variant="h4" sx={{ fontSize: '20px' }}>
              ®
            </Typography>
          </Stack>
          <Typography sx={{ fontSize: '12px' }}>Mobile Performance Index</Typography>
        </Stack>
        <InfoOutlinedIcon />
      </TitleBox>
      <Hidden smUp>
        <MobileText>
          <Typography>Índice de rendimiento mobile completo de las diferentes aplicaciones de un sector</Typography>
        </MobileText>
      </Hidden>
    </>
  )
}
