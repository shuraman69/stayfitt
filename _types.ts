import {EXPO_CONSOLE_METHOD_NAME} from "expo/build/logs/LogSerialization";

export interface ChallengeI {
 title: string
 id: string
 bonusPoints:number
 endDate: string
 type: string
 globalProgress: number
 pivot: {
  progress: number
 }
 media: {
  full_url: string
 }[]
}

export interface ChallengeNodeI { node: ChallengeI }

export interface ChallengesListI {
 edges: ChallengeNodeI[]
}

export interface ChallengesResponseI {
 me: {
  id: string
  activeChallenges: ChallengesListI
  passedChallenges: ChallengesListI
 }
}