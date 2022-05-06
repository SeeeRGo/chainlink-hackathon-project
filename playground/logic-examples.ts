// Trying out counting and recounting votes with the concept of event sourcing and incremental changes
// Not sure about how to approach events of rewriting of already cast votes given the partial nature of possible vote casting
// Has to be sanity check for state where ***NO*** voter has a total vote power > 1

type OwnVote = {
  fromId: Governor["id"];
  amount: 1;
  type: "OWN";
};

type DelegatedVote = {
  fromId: Governor["id"];
  // amount: number; // Can't know amount in advance depends on the number of already voted delegates of a particular voter
  type: "DELEGATED";
};

export type OptionId = number;
interface VotingAmounts {
  amounts: Record<Governor["id"], number>;
}

export type VotingState = StateData & {
  delegatesVoted: Record<Governor["id"], number | "CASTED">;
};

// Only one own vote should be allowed, and ***NO*** duplicating Ids should be possible in general
export type Vote = OwnVote | DelegatedVote

export type StateData = {
  [optionId in OptionId]: VotingAmounts; // total vote power > 1 is MAJOR freakout
};
// really need class for this (pun intended)
type StateBehavior = {
  voidVote: (fromId: Governor['id']) => StateData;
  decreaseVotePartial: (fromId: Governor['id'], optionId: OptionId, amount: number) => StateData;
  addVote: (fromId: Governor['id'], optionId: OptionId, amount: number) => StateData; // include sanity checks for total voting power
}

type State = StateBehavior & {
  data: StateData;
}

// delegates and followers can't contain own id
// TODO turn into class and add delegate and followers CRUD methods
export interface Governor {
  id: number,
  delegates: Array<Governor['id']>,
  followers: Array<Governor['id']>,
}

type DelegationGraph = Record<Governor['id'], Governor>

const addVotes = (optionId: OptionId, votes: Vote[]) => {
  // TODO check state for existing cast own votes for delegated votes
  const votesToAdd = votes.filter(() => true)

  // Updating voting state simulation
  console.log(`Voting for option #${optionId}`);
  votesToAdd.forEach(({ fromId, amount, type }) => {
    console.log(`vote from user #${fromId} for ${amount} vote(s), it's a ${type} vote`);
  })
}

const voidVotes = (votes: Vote[]) => {
  // Updating voting state simulation
  votes.forEach(({ fromId, amount, type }) => {
    console.log(`vote from user #${fromId} for ${amount} vote(s), is now VOID. It was ${type} vote`);
  })
}

const castVote = (currentState: State, delegationMap: DelegationGraph, optionId: OptionId, fromId: Governor['id']) => {
  const { delegates, followers } = delegationMap[fromId]
  //  all the delegates votes should be voided which is equivalent to just setting state of the
  const dataAfterVoidingDelegateVoices = currentState.voidVote()

}
