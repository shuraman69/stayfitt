import { View } from 'react-native'
import { FC } from 'react'

export const Container: FC = ({ children }) => {
  return (
    <View
      style={{
        paddingTop: 30,
      }}
    >
      {children}
    </View>
  )
}
