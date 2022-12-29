import { decodeJwt } from 'jose'

export function parseToken<T>(token: string): T | undefined {
  try {
    const payload = decodeJwt(token)
    return payload as unknown as T
  } catch (error) {
    console.error('The token format is wrong.')
    return undefined
  }
}
