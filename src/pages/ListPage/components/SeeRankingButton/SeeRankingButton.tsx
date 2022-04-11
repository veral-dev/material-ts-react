import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import { Button } from '@mui/material'

// Styles
import { RankingBtnBox } from './SeeRankingButton.styles'

interface SeeRankingButtonProps {
  center?: boolean
}

export default function SeeRankingButton({ center }: SeeRankingButtonProps) {
  if (center)
    return (
      <RankingBtnBox>
        <Button variant="text" endIcon={<ArrowForwardOutlinedIcon />}>
          VER RANKING COMPLETO
        </Button>
      </RankingBtnBox>
    )
  return (
    <Button variant="text" endIcon={<ArrowForwardOutlinedIcon />}>
      VER RANKING COMPLETO
    </Button>
  )
}
