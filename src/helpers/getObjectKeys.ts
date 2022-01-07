export const getObjectKeys = <T extends object>(object: T): string[] => {
  return Object.keys(object)
}
