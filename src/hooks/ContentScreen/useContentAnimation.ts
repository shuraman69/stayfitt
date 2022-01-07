import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

export const useContentAnimation = (loading: boolean) => {
  const showScreen = useRef(new Animated.Value(0)).current
  useEffect(() => {
    if (loading) return
    Animated.timing(
      showScreen,
      {
        toValue: 1,
        useNativeDriver: true,
      },
    ).start()
  }, [loading])
  return { showScreen }
}