/* eslint-disable camelcase */
export interface SectorsType {
  id: string
  name: string
  name_spanish: string
}

export interface MpixType {
  position: number
  idApp: string
  name: string
  icon: string
  variation: number
  variationIndex: string
  penetration: number
  id_sector: number
  sector: string
  sector_spanish: string
  id_subsector: string
  subsector: string
  subsector_spanish: string
  score: number
  date: Date
  type: string
}

export interface RankingType {
  date: string
  total_apps: string
  mpix: MpixType[]
}
