import React, { useEffect, useState, useContext } from 'react'
import { Button, LinearProgress, Stack } from '@mui/material'
import { useHistory, useLocation } from 'react-router-dom'

// Components
import { getRanking } from 'src/services/app.services'
import SimpleSelect from 'src/components/SimpleSelect/SimpleSelect'
import IconText from 'src/components/IconText'
import Title from './components/Title'
import ResultTable from './components/ResultTable'

// Context
import { AlertContext } from 'src/context/alert/alertContext'
import { SectorsContext } from '../../context/sector/sectorContext'

// Styles
import { SubtitleBox } from './ListPage.styles'

// Icons
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'

// Types
import { RankingType } from 'src/types/services.types'
import { ContainerApp } from 'src/styles/general_styles'

const INIT_SECTOR = '18'

export default function ListPage(): JSX.Element {
  const history = useHistory()
  const location = useLocation()
  const { sectors } = useContext(SectorsContext)
  const { showSnackbar } = useContext(AlertContext)
  const [sectorId, setSectorId] = useState(location.search.split('=')[1] || INIT_SECTOR)
  const [loading, setLoading] = useState(false)
  const [ranking, setRanking] = useState<RankingType | null>(null)

  useEffect(() => {
    return () => setRanking(null)
  }, [])

  const fetchRanking = async () => {
    try {
      setLoading(true)
      const data = await getRanking(sectorId)
      setRanking(data)
    } catch (error) {
      if (error instanceof Error) showSnackbar('error', error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    history.replace({ pathname: location.pathname, search: `idSector=${sectorId}` })
    fetchRanking()
  }, [sectorId])

  return (
    <ContainerApp maxWidth="lg">
      <Title />
      <SubtitleBox>
        <SimpleSelect name="ranking-select" options={sectors} value={sectorId} setValue={setSectorId} />
        <Stack className="subtitle-stack">
          <Button variant="contained" color="primary" startIcon={<NotificationsActiveOutlinedIcon />}>
            Recibir alertas
          </Button>
          <Stack direction="row" spacing={4}>
            <IconText text="Compartir" icon={<ShareOutlinedIcon />} />
            <IconText text="Descargar" icon={<FileDownloadOutlinedIcon />} />
          </Stack>
        </Stack>
      </SubtitleBox>
      {loading && <LinearProgress />}
      {ranking && <ResultTable ranking={ranking} />}
    </ContainerApp>
  )
}
