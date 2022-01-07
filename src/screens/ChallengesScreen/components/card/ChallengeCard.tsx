import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { APP_GRAY } from '../../../../helpers/colors'
import { ChallengeNodeI } from '../../../../../_types'
import { getChallengeType } from '../../../../helpers/challenges/getChallengeType'
import { ProgressBlock } from './ProgressBlock'
import { ChallengeType } from './ChallengeType'
import { ChallengeTitle } from './ChallengeTitle'
import { ChallengeImage } from './ChallengeImage'
import { useChallengeData } from '../../../../hooks/ContentScreen/useChallengeData'

interface ChallengeCardI {
  item: ChallengeNodeI
}

export const ChallengeCard: FC<ChallengeCardI> = ({ item }) => {
  const { imageUrl, isDone, type, progressText, title, progressTitle, progress } = useChallengeData(item)
  return (
    <View style={styles.container}>
      <ChallengeImage imageUrl={imageUrl} />
      <View>
        <ChallengeType type={type} />
        <ChallengeTitle title={title} />
        <ProgressBlock
          progress={progress}
          isDone={isDone}
          percentText={progressTitle}
          text={progressText}
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
    flexDirection: 'row',
  },
})