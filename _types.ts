import {EXPO_CONSOLE_METHOD_NAME} from "expo/build/logs/LogSerialization";

export interface ChallengeI {
 title: string
 id: string
 goal: number
 goalUnits: string
 startDate: string
 endDates: string
 type: string
 globalProgress: number
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