import { Governor } from "./delegationGraph";

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

export type VotingState = VoteAmounts & {
  delegatesVoted: Record<Governor["id"], number | "CASTED">;
};

// Only one own vote should be allowed, and no duplicating Ids should be possible in general
export type Vote = OwnVote | DelegatedVote

export type VoteAmounts = {
  [optionId in OptionId]: VotingAmounts; // total vote power > 1 is MAJOR freakout
};
// really need class for this (pun intended)
type StateBehavior = {
  addVote: (
    fromId: Governor["id"],
    optionId: OptionId,
    amount: number
  ) => VotingState; // include sanity checks for total voting power
};

interface StateData {
  data: VotingState;
}
export interface State extends StateBehavior, StateData {}
