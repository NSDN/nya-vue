import type { Plate } from '../types'
import type { AxiosResponse } from 'axios'

import { API_URL } from '@/config'
import { HTTPMethods } from '@/constant/enums'
import { http } from '@/lib/http/axios'

export async function queryPlateList(): Promise<Plate.List> {
  try {
    const response: AxiosResponse<Plate.List, null> = await http({
      url: API_URL.GET_PLATE_LIST,
      method: HTTPMethods.GET,
    })

    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}
