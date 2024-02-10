import type { Commic } from '@/features/commic/types'

import { RouteNameEnum } from '@/lib/router/enum'

export namespace CreateTopic {
  interface CreateTopicParameter {
    plateRouteName: RouteNameEnum
    topicTitle: string
    pages: Commic.Pages
  }
}
