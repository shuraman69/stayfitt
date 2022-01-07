export const getDayDiff = (date: string) => {
  const end: any = new Date(date.split(' ')[0])
  const now: any = new Date()
  return Math.floor((end - now) / (1000 * 3600 * 24))
}