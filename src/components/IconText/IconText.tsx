import React, { ReactNode } from 'react'
import { Typography } from '@mui/material'

// Styles
import { IconBox } from 'src/styles/general_styles'
import { IconTextStack } from './IconText.styles'

interface SelectProps {
  icon: ReactNode
  text: string
  orientation?: 'y' | 'x'
}

export default function IconText({ icon, text, orientation = 'y' }: SelectProps): JSX.Element {
  return (
    <IconTextStack direction={orientation === 'y' ? 'column' : 'row'}>
      <IconBox>{icon}</IconBox>
      <Typography component="span">{text}</Typography>
    </IconTextStack>
  )
}
