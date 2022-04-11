import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Stack } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

// Components
import DisplayFields from './DisplayFields'

// Styles
import { StyledTableCell } from './Table.styles'

interface TableProps {
  headCells: any[]
  rows: any[]
}

export default function BasicTable({ headCells, rows }: TableProps) {
  return (
    <TableContainer>
      <Table aria-label="table">
        <TableHead>
          <TableRow>
            {headCells &&
              headCells.map((col) => (
                <StyledTableCell key={col.label} align={col.align}>
                  <Stack direction="row">
                    {col.label}
                    {col.info && <InfoOutlinedIcon />}
                  </Stack>
                </StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              {headCells.map((col, colIdx) => (
                <TableCell key={`${col}-${colIdx}`} align={col.align}>
                  <DisplayFields row={row} col={col} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
