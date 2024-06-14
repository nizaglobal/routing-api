import { Protocol } from '@nizaglobal/router-sdk'
import { ChainId } from '@nizaglobal/sdk-core'

export const S3_POOL_CACHE_KEY = (baseKey: string, chain: ChainId, protocol: Protocol) =>
  `${baseKey}-${chain}-${protocol}`
