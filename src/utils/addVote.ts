import clone from 'just-clone';
import { OptionId, Vote, VotingState } from "../types/votingState";

// TODO use something that allows to use path
export const addVote = (previousState: VotingState, vote: Vote, optionId: OptionId): VotingState => {
  // Find delgated voting amounts and set them to zero
  let state = clone(previousState);
  if(vote.type === 'OWN') {
    for (let key in state) {
      const amounts = state[key]?.amounts;
      if (key !== "delegatesVoted" && amounts) {
        amounts[vote.fromId] = 0;
        if (key === `${optionId}`) {
          // Set amount for optionId
          amounts[vote.fromId] = vote.amount;
        }
      }
    }
    // Set delegatesVoted to CASTED
    state.delegatesVoted[vote.fromId] = "CASTED";
  } else {
    // Delegates already voted for this follower
    const delegatesVoted = state.delegatesVoted[vote.fromId] ?? 0
    if (delegatesVoted === 'CASTED') {
      return state;
    }
    // Compute amount of new delegates share
    const newShare = 1 / (delegatesVoted + 1)
    const existingShareMultiplier = delegatesVoted / (delegatesVoted + 1)
    // Go through options multiply existing shares to decrease them proportionally
    for (let key in state) {
      const amounts = state[key]?.amounts;
      if (key !== "delegatesVoted" && amounts) {
        let newAmount = amounts[vote.fromId] ?? 0;
        newAmount *= existingShareMultiplier;
        if (key === `${optionId}`) {
          // Add amount for selected optionId
          newAmount += newShare;
        }
        amounts[vote.fromId] = newAmount;
        state.delegatesVoted[vote.fromId] = delegatesVoted + 1;
      }
    }
  }
  return state;
}