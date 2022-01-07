import React, { FC, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Video } from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient'
import { StayFittSVG } from '../svg/Auth/Frame'
import { windowHeight } from '../helpers/constants'

const backGroundVideo = require('../assets/authBg.mp4')
export const VideoContainer: FC = ({ children }) => {
  const video = React.useRef(null)
  useEffect(() => {
    video.current
  }, [])
  return (
    <View style={{ position: 'relative' }}>
      <LinearGradient style={styles.gradient} colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']} />
      <View style={styles.label}>
        <StayFittSVG />
      </View>
      <Video
        ref={video}
        source={backGroundVideo}
        status={{
          isLooping: true,
          shouldPlay: true,
        }}
        resizeMode="cover"
        style={styles.video}
      />
      <View style={styles.contentContainer}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    height: windowHeight,
  },
  gradient: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  label: {
    position: 'absolute',
    top: 60,
    left: 27,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  contentContainer: {
    position: 'absolute',
    top: windowHeight / 2,
    zIndex: 100,
  },
})
