import { Animated, StyleSheet } from 'react-native'
import { BLACK } from '../../helpers/colors'
import { FC } from 'react'
import { useFetchChallenges } from '../../hooks/ContentScreen/useFetchChallenges'
import { ChallengesBlock } from './components/ChallengesBlock'
import { empty } from '../../helpers/empty'
import { Loader } from '../../components/Loader'
import { useContentAnimation } from '../../hooks/ContentScreen/useContentAnimation'

export const ChallengesScreen: FC = ({}) => {
  const { loading, activeChallenges, passedChallenges } = useFetchChallenges()
  const { showScreen } = useContentAnimation(loading)

  if (loading) return <Loader indicatorSize='large' bg={BLACK} />
  return (
    <Animated.ScrollView style={[{ opacity: showScreen }, styles.scrollContainer]}>
      {!empty(activeChallenges?.edges) && activeChallenges?.edges &&
        <ChallengesBlock items={activeChallenges?.edges} title={'Активные'} />
      }
      {!empty(passedChallenges?.edges) && passedChallenges?.edges &&
        <ChallengesBlock items={passedChallenges?.edges} title={'Пройдены'} />
      }
    </Animated.ScrollView>
  )
}


const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: BLACK,
  },
})

