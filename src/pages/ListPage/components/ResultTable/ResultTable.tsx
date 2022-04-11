import React from 'react'
import { Hidden, Typography } from '@mui/material'

// Components
import Table from 'src/components/Table'

// Styles
import { BeforeTableBox, BoxTable, UpdateStack } from './ResultTable.styles'

// Icons
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import { RankingType } from 'src/types/services.types'
import SeeRankingButton from '../SeeRankingButton'

const headCells: any[] = [
  {
    field: 'position',
    align: 'center',
    label: 'Puesto',
    fieldtype: 'position'
  },
  {
    field: 'name',
    align: 'left',
    label: 'Empresa',
    fieldtype: 'name-avatar',
    info: true
  },
  {
    field: 'mpix',
    align: 'left',
    label: 'MPIx',
    fieldtype: 'mpix',
    info: true
  },
  {
    field: 'variation',
    align: 'left',
    label: 'Variación',
    fieldtype: 'variation',
    info: true
  },
  {
    field: 'penetration',
    align: 'left',
    label: 'Penetración',
    fieldtype: 'penetration',
    info: true
  },
  {
    field: 'sector_spanish',
    align: 'left',
    label: 'Sector',
    fieldtype: 'string',
    info: true
  },
  {
    field: 'subsector_spanish',
    align: 'left',
    label: 'Subsector',
    fieldtype: 'string',
    info: true
  }
]

interface ResultTableProps {
  ranking: RankingType
}

export default function ResultTable({ ranking }: ResultTableProps) {
  return (
    <BoxTable>
      <BeforeTableBox>
        <Typography variant="caption">
          SE MUESTRAN {ranking.mpix.length} APPS DE {ranking.total_apps || '0'}
        </Typography>
        <Hidden smDown>
          <SeeRankingButton />
        </Hidden>
        <UpdateStack>
          <AccessTimeOutlinedIcon />
          <Typography variant="body2">Actualizado {ranking?.date}</Typography>
        </UpdateStack>
      </BeforeTableBox>
      <Hidden smUp>
        <SeeRankingButton center />
      </Hidden>
      <Table headCells={headCells} rows={ranking.mpix} />
      <Hidden smDown>
        <SeeRankingButton />
      </Hidden>
    </BoxTable>
  )
}
