import {StyleSheet, Text, View} from "react-native";
import {FC} from "react";
import {WHITE} from "../../../helpers/colors";
import {ChallengeNodeI} from "../../../../_types";
import {ChallengeCard} from "./card/ChallengeCard";

interface ChallengesBlockI {
 title: string
 items: ChallengeNodeI[]
}

export const ChallengesBlock: FC<ChallengesBlockI> = ({title = 'Активные', items = []}) => {
 return (
  <View style={styles.container}>
   <Text style={styles.title}>{title}</Text>
   {items.map(item => <ChallengeCard key={item.node.id} item={item}/>)}
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  padding: 20
 },
 title: {
  color: WHITE,
  fontSize: 20,
  fontWeight: '600',
  marginBottom:15
 },
 cardContainer: {},
 cardTitle: {}
})

