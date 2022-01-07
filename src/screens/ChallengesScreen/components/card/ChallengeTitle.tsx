import {StyleSheet, Text, View} from "react-native";
import React, {FC} from "react";
import {WHITE} from "../../../../helpers/colors";
import {windowWidth} from "../../../../helpers/constants";

interface ChallengeTitleI {
 title: string
}

export const ChallengeTitle: FC<ChallengeTitleI> = ({title}) => {
 return (
  <View style={styles.titleContainer}>
   <Text style={styles.title} numberOfLines={2} ellipsizeMode={"tail"}>
    {title}
   </Text>
  </View>
 )
}


const styles = StyleSheet.create({
 titleContainer: {
  maxWidth: windowWidth / 2,
  marginBottom:8
 },
 title: {
  maxWidth: windowWidth / 2,
  color: WHITE,
  fontSize: 15,
  fontWeight: '600'
 }
})