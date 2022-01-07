import {GLOBAL, PERSONAL} from "./challengeTypes";

export const getChallengeType = (type: string) => {
 switch (type) {
  case GLOBAL.type:
   return GLOBAL.title
  case PERSONAL.type:
   return PERSONAL.title
  default:
   return GLOBAL.title
 }
}