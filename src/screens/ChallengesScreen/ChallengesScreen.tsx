import {Animated, StyleSheet} from 'react-native'
import {BLACK} from '../../helpers/colors'
import {FC, useEffect, useLayoutEffect} from 'react'
import {useFetchChallenges} from '../../hooks/ContentScreen/useFetchChallenges'
import {ChallengesBlock} from './components/ChallengesBlock'
import {empty} from '../../helpers/empty'
import {Loader} from '../../components/Loader'
import {useNavigation} from "@react-navigation/native";

export const ChallengesScreen: FC = ({}) => {
 const {loading, activeChallenges, passedChallenges} = useFetchChallenges()
 const navigation = useNavigation()
 useLayoutEffect(() => {
  navigation.setOptions({headerTitle: 'Мои челленджи'})
 }, [])
 if (loading) return <Loader indicatorSize='large' bg={BLACK}/>
 return (
  <Animated.ScrollView style={styles.scrollContainer}>
   {!empty(activeChallenges?.edges) && activeChallenges?.edges &&
    <ChallengesBlock items={activeChallenges?.edges} title={'Активные'}/>
   }
   {!empty(passedChallenges?.edges) && passedChallenges?.edges &&
    <ChallengesBlock items={passedChallenges?.edges} title={'Пройдены'}/>
   }
  </Animated.ScrollView>
 )
}


const styles = StyleSheet.create({
 scrollContainer: {
  backgroundColor: BLACK,
 },
})

