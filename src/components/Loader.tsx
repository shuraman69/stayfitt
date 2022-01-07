import { ActivityIndicator, View } from 'react-native'
import { cloneElement, FC } from 'react'
import { TOXIC_GREEN, WHITE } from '../helpers/colors'

export const Loader: FC<{
  bg?: string
  indicatorColor?: string
  indicatorSize?: number | 'large' | 'small'
}> = ({ bg = WHITE, indicatorColor = TOXIC_GREEN, indicatorSize = 'small' }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: bg,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator size={indicatorSize} color={indicatorColor} />
    </View>
  )
}
