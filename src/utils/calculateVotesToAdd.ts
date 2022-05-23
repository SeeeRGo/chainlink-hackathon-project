import { DelegationGraph, Governor } from "../types/delegationGraph";
import { OptionId, Vote, VoteEvent } from "../types/votingState";

export const calculateVotesToAdd = (
  delegationGraph: DelegationGraph,
  fromId: Governor["id"],
  optionId: OptionId
): VoteEvent => {
  const voter = delegationGraph[fromId];
  if (!voter) {
    return {
      optionId,
      votes: [
        {
          type: "OWN",
          amount: 1,
          fromId,
        },
      ],
    };
  }
  const followerVotes = voter.followers.map(
    (follower): Vote => ({ type: "DELEGATED", fromId: follower })
  );
  return {
    optionId,
    votes: [
      {
        type: 'OWN',
        amount: 1,
        fromId,
      },
      ...followerVotes,
    ],
  };
};
