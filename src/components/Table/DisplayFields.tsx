import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'

interface DisplayFieldsProps {
  col: any
  row: any
}

export default function DisplayFields({ col, row }: DisplayFieldsProps): JSX.Element {
  const { field, fieldtype } = col
  const data = row[field]

  switch (fieldtype) {
    case 'string':
      return <Typography variant="body1">{data}</Typography>
    case 'mpix':
      return <Typography variant="body1">{Math.round(data * 10) / 10}</Typography>
    case 'variation':
      return <Typography variant="body1">{Number(data * 100).toFixed(2)}%</Typography>
    case 'penetration':
      return <Typography variant="body1">{Number(data * 100).toFixed(2)}%</Typography>
    case 'position':
      return <Typography variant="h2">{data}</Typography>
    case 'name-avatar':
      return (
        <Stack direction="row" sx={{ alignItems: 'center' }} spacing={1}>
          <Avatar sx={{ width: 32, height: 32 }} src={row.icon} />
          <Typography variant="body1">{data}</Typography>
        </Stack>
      )
    default:
      return <Typography>{data}</Typography>
  }
}
