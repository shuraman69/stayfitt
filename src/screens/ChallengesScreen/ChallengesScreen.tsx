import {ActivityIndicator, ScrollView, StyleSheet} from "react-native";
import {BLACK} from "../../helpers/colors";
import {FC} from "react";
import {useFetchChallenges} from "../../hooks/ContentScreen/useFetchChallenges";
import {ChallengesBlock} from "./components/ChallengesBlock";
import {empty} from "../../helpers/empty";

export const ChallengesScreen: FC = ({}) => {
 const {loading, activeChallenges, passedChallenges} = useFetchChallenges()

 if (loading) return <ActivityIndicator/>
 return (
  <ScrollView style={styles.scrollContainer}>
   {!empty(activeChallenges?.edges) && activeChallenges?.edges &&
       <ChallengesBlock items={activeChallenges?.edges} title={'Активные'}/>
   }
   {!empty(passedChallenges?.edges) && passedChallenges?.edges &&
       <ChallengesBlock items={passedChallenges?.edges} title={'Пройдены'}/>
   }
  </ScrollView>
 )
}


const styles = StyleSheet.create({
 scrollContainer: {
  backgroundColor: BLACK
 }
})

