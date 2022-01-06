import {ScrollView, StyleSheet} from "react-native";
import {BLACK} from "../../helpers/colors";
import {FC} from "react";

export const ChallengesScreen:FC = ({}) => {
 return (
  <ScrollView style={styles.scrollContainer}>

  </ScrollView>
 )
}


const styles = StyleSheet.create({
 scrollContainer: {
  backgroundColor: BLACK
 }
})

