import { Dimensions, Platform } from 'react-native'

export const windowHeight = Dimensions.get('window').height
export const windowWidth = Dimensions.get('window').width
export const isIos = Platform.OS === 'ios'
export const TOKEN = 'TOKEN'
export const LOCATION = {
  apollo: 'https://56.inskill-dev.ru/api/graphql',
  api: 'https://inskill-dev.ru/',
}
