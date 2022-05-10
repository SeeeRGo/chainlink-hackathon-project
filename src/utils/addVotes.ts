import { VoteEvent, VotingState } from "../types/votingState";
import { addVote } from "./addVote";

export const addVotes = (
  previousState: VotingState,
  event: VoteEvent
): VotingState => {
  const { optionId, votes } = event;

  const state = votes.reduce(
    (currentState, vote) => addVote(currentState, vote, optionId),
    previousState
  );

  return state;
};
