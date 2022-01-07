export const empty = <T extends Array<any> | String | undefined>(value: T): boolean => {
 if (typeof value === 'undefined') return true
 return value.length === 0
}