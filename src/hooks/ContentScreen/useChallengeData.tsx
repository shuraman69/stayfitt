import {ChallengeNodeI} from '../../../_types'
import {getChallengeType} from '../../helpers/challenges/getChallengeType'
import plural from 'plural-ru'
import {getDayDiff} from '../../helpers/challenges/getDayDiff'

export const useChallengeData = (item: ChallengeNodeI) => {
 const {node} = item
 const imageUrl = node.media?.[0].full_url
 const type = getChallengeType(node.type)
 const title = node.title
 const progress = node.pivot.progress / 100
 const isDone = progress >= 1
 const progressTitle = isDone ? 'Пройден' : `${progress * 100}%`
 const progressText = isDone ?
  `Получено ${node.bonusPoints}` :
  `Еще ${getDayDiff(node.endDate)} ${plural(getDayDiff(node.endDate), 'день', 'дня', 'дней')}`

 return {imageUrl, type, progressTitle, progressText, isDone, progress, title}
}