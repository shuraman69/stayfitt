import {Image, StyleSheet, View} from "react-native";
import React, {FC} from "react";

interface ChallengeImageI {
 imageUrl: string
}

export const ChallengeImage: FC<ChallengeImageI> = ({imageUrl}) => {
 return (
  <View style={styles.imageContainer}>
   <Image style={styles.image} source={{uri: imageUrl}}/>
  </View>
 )
}


const styles = StyleSheet.create({
 imageContainer: {
  marginRight: 10
 },
 image: {
  width: 55,
  height: 84
 }
})