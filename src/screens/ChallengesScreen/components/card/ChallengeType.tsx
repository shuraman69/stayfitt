import {StyleSheet, Text, View} from "react-native";
import React, {FC} from "react";
import {APP_GRAY_2} from "../../../../helpers/colors";

interface ChallengeTypeI {
 type: string
}

export const ChallengeType: FC<ChallengeTypeI> = ({type}) => {
 return (
  <View style={styles.typeContainer}>
   <Text style={styles.typeText}>
    {type}
   </Text>
  </View>
 )
}


const styles = StyleSheet.create({
 typeContainer: {
  backgroundColor: 'rgba(242, 242, 242, 0.11)',
  borderRadius: 5,
  paddingVertical: 3,
  paddingHorizontal: 6,
  maxWidth: 165,
  marginBottom:5
 },
 typeText: {
  color: APP_GRAY_2
 }
})