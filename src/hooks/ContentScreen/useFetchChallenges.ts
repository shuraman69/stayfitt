import {useQuery} from "@apollo/client";
import {CHALLENGES} from "../../api/apollo";
import {ChallengesResponseI} from "../../../_types";

export const useFetchChallenges = () => {
 const {data, loading} = useQuery<ChallengesResponseI>(CHALLENGES)
 const activeChallenges = data?.me.activeChallenges
 const passedChallenges = data?.me.passedChallenges
 return {loading, activeChallenges, passedChallenges}
}