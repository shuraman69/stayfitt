import React, {FC} from "react";
import {StyleSheet, View} from "react-native";
import {APP_GRAY} from "../../../../helpers/colors";
import {ChallengeNodeI} from "../../../../../_types";
import {getChallengeType} from "../../../../helpers/challenges/getChallengeType";
import {ProgressBlock} from "./ProgressBlock";
import {ChallengeType} from "./ChallengeType";
import {ChallengeTitle} from "./ChallengeTitle";
import {ChallengeImage} from "./ChallengeImage";

interface ChallengeCardI {
 item: ChallengeNodeI
}

export const ChallengeCard: FC<ChallengeCardI> = ({item}) => {

 return (
  <View style={styles.container}>
   <ChallengeImage imageUrl={item.node.media[0].full_url}/>
   <View>
    <ChallengeType type={getChallengeType(item.node.type)}/>
    <ChallengeTitle title={item.node.title}/>
    <ProgressBlock
     progress={item.node.globalProgress / 100}
     percentText={`${item.node.globalProgress}%`}
     text={`${item.node.goal} ${item.node.goalUnits}`}
    />
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: APP_GRAY,
  marginBottom: 10,
  padding: 15,
  borderRadius: 10,
  flexDirection: "row",
 }
})