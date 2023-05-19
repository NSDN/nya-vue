export { parseToken } from './token'
export { storage, STORAGE_KEYS } from './storage'
export { hashSecreate } from './authorization'

/**
 * @description 暂停
 * @param time
 */
export function sleep(time: number): Promise<undefined> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(undefined)
      clearTimeout(timer)
    }, time * 1)
  })
}

/**
 * 格式化日期
 * @param date 日期
 * @param format 目标格式
 * @returns 目标格式的日期
 */
export function getFormattedDate(date: Date | string, format: string): string {
  const _date = new Date(date)
  const year = _date.getFullYear()
  const month = `0${_date.getMonth() + 1}`.slice(-2)
  const day = `0${_date.getDate()}`.slice(-2)
  const hours = _date.getHours()
  const minutes = _date.getMinutes()
  const seconds = _date.getSeconds()

  return format
    .replace(/yyyy/g, year.toString())
    .replace(/mm/g, month)
    .replace(/dd/g, day)
    .replace(/HH/g, hours.toString())
    .replace(/MM/g, minutes.toString())
    .replace(/SS/g, seconds.toString())
}
