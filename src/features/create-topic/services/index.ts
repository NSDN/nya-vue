import type { CreateTopic } from '../types'

import { useStorage } from '@/hooks'
import { StorageKeyEnum } from '@/hooks/use-storage'

export async function createCommicTopic(
  parameter: CreateTopic.CreateTopicParameter
): Promise<boolean> {
  try {
    const storage = useStorage()

    storage.saveData<CreateTopic.CreateTopicParameter>(
      StorageKeyEnum.COMMIC_TOPIC,
      parameter
    )

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
