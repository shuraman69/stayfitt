import React, {FC, useEffect} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {Video} from "expo-av";


const backGroundVideo = require('../assets/authBg.mp4')
export const VideoContainer: FC = () => {
 const video = React.useRef(null);
 useEffect(() => {
  video.current
 }, [])
 return (
  <Video
   ref={video}
   source={backGroundVideo}
   status={{
    isLooping: true,
    shouldPlay: true
   }}
   resizeMode='cover'
   style={styles.video}
  />
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1
 },
 video: {
  height: Dimensions.get("window").height,
  backgroundColor: 'linear-gradient(180deg, rgba(0, 0, 0, 0.88) 19.56%, rgba(0, 0, 0, 0) 82.72%)'
 }
})