import { StyleSheet, Text, View } from 'react-native'
import { APP_GRAY_2, TOXIC_GREEN } from '../../../../helpers/colors'
import { windowWidth } from '../../../../helpers/constants'
import * as Progress from 'react-native-progress'
import React, { FC } from 'react'
import { Lightning } from '../../../ContentScreen/components/svg/Lightning'

interface ProgressBlockI {
  progress: number
  text: string
  isDone: boolean
  percentText: string
}

export const ProgressBlock: FC<ProgressBlockI> = ({ progress, isDone, text, percentText }) => {
  return (
    <View style={styles.container}>
      <Progress.Bar
        color={TOXIC_GREEN}
        unfilledColor={APP_GRAY_2}
        borderWidth={0}
        height={6}
        style={styles.bar}
        progress={progress}
        width={windowWidth / 2 * 1.25}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {text}
          {isDone && <Lightning width={'15'} height={'18'} color={APP_GRAY_2} />}
        </Text>
        <Text style={styles.percent}>{percentText}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  text: {
    color: APP_GRAY_2,
    textTransform: 'uppercase',
  },
  percent: {
    color: TOXIC_GREEN,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  bar: {
    marginBottom: 9,
  },
})