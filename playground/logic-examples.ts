// Trying out counting and recounting votes with the concept of event sourcing and incremental changes
// Not sure about how to approach events of rewriting of already cast votes given the partial nature of possible vote casting
// Has to be sanity check for state where no voter has a total vote power > 1

import { DelegationGraph, Governor } from "../src/types/delegationGraph";
import { OptionId, State, Vote } from "../src/types/votingState";

// delegates and followers can't contain own id
// TODO turn into class and add delegate and followers CRUD methods


const addVotes = (optionId: OptionId, votes: Vote[]) => {
  // TODO check state for existing cast own votes for delegated votes
  const votesToAdd = votes.filter(() => true)

  // Updating voting state simulation
  console.log(`Voting for option #${optionId}`);
  votesToAdd.forEach(({ fromId, type }) => {
    console.log(`vote from user #${fromId} for some amount of vote(s), it's a ${type} vote`);
  })
}

const voidVotes = (votes: Vote[]) => {
  // Updating voting state simulation
  votes.forEach(({ fromId, type }) => {
    console.log(`vote from user #${fromId} for some amount of vote(s), is now VOID. It was ${type} vote`);
  })
}

const castVote = (currentState: State, delegationMap: DelegationGraph, optionId: OptionId, fromId: Governor['id']) => {
  // const { delegates, followers } = delegationMap[fromId]
  //  all the delegates votes should be voided which is equivalent to just setting state of the
  // const dataAfterVoidingDelegateVoices = currentState.voidVote()

}
