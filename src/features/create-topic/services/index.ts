import type { CreateTopic } from '../types'

import { storage } from '@/utils'
import { STORAGE_KEYS } from '@/constant'

export async function createCommicTopic(
  parameter: CreateTopic.CreateTopicParameter,
): Promise<boolean> {
  try {
    storage.set<CreateTopic.CreateTopicParameter>(
      STORAGE_KEYS.COMMIC_TOPIC,
      parameter,
    )

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
