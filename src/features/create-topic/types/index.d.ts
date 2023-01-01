import type { Commic } from '@/features/commic/types'

export namespace CreateTopic {
  interface CreateTopicParameter {
    topicTitle: string
    pages: Commic.Pages
  }
}
