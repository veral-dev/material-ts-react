import axiosInstance from './axiosInstance'
import { RankingType, SectorsType } from '../types/services.types'

export const getSectors = async (): Promise<SectorsType[]> => {
  return axiosInstance
    .get('/list/sector')
    .then((response) => {
      return response.data.data
    })
    .catch(() => {
      throw new Error('Hubo un error mientras se intentaban cargar los sectores')
    })
}

export const getRanking = async (sectorId: string): Promise<RankingType> => {
  return axiosInstance
    .get(`/show/1/${sectorId}`)
    .then((response) => {
      return response.data.data
    })
    .catch(() => {
      throw new Error('Hubo un error mientras se intentaban cargar el ranking')
    })
}
