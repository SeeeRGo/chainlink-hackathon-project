import { Vote, VoteEvent, VotingState } from "../../src/types/votingState";

// 3 Options
export const initialState: VotingState = {
  delegatesVoted: {},
  1: {
    amounts: {},
  },
  2: {
    amounts: {},
  },
  3: {
    amounts: {},
  },
};

export const emptyVoteEventForOptionThree: VoteEvent = {
  optionId: 3,
  votes: [],
}
export const firstUserOwnVoteEventForOptionThree: VoteEvent = {
  optionId: 3,
  votes: [
    {
      type: "OWN",
      amount: 1,
      fromId: "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051",
    },
  ],
};

// TODO test votes array creation from just voterId according to initial delegationGraph
export const firstUserVotesForOptionTwo: VoteEvent = {
  optionId: 2,
  votes: [
    {
      fromId: "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051",
      amount: 1,
      type: "OWN",
    },
    {
      fromId: "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
      type: "DELEGATED",
    },
    {
      fromId: "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
      type: "DELEGATED",
    },
  ],
};
// State after firstUserVotesForOptionTwo

export const stateAfterStepOne: VotingState = {
  1: {
    amounts: {},
  },
  2: {
    amounts: {
      "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": 1,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 1,
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 1,
    },
  },
  3: {
    amounts: {},
  },
  delegatesVoted: {
    "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": "CASTED",
    "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 1,
    "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 1,
  },
};

export const winnerOptionAfterStepOne =
  "winner is option #2 with 3 total votes";

export const thirdUserOwnVote: Vote = {
  fromId: "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
  amount: 1,
  type: "OWN",
};

export const thirdUserVoteDelegatedBySecondUser: Vote = {
  fromId: "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
  type: "DELEGATED",
};

// Step 2 third user votes for option 1
export const thirdUserVotesForOptionOne: VoteEvent = {
  optionId: 1,
  votes: [
    thirdUserOwnVote,
    thirdUserVoteDelegatedBySecondUser,
    {
      fromId: "0x48FA28c7cb2BE9e03ff65491f405907618B73508",
      type: "DELEGATED",
    },
  ],
};

export const stateAfterStepTwoPhase1: VotingState = {
  1: {
    amounts: {
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 1,
    },
  },
  2: {
    amounts: {
      "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": 1,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 1,
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 0,
    },
  },
  3: {
    amounts: {
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 0,
    },
  },
  delegatesVoted: {
    "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": "CASTED",
    "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 1,
    "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": "CASTED",
  },
};

export const stateAfterStepTwoPhase2: VotingState = {
  1: {
    amounts: {
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 1,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0.5,
    },
  },
  2: {
    amounts: {
      "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": 1,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0.5,
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 0,
    },
  },
  3: {
    amounts: {
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 0,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0,
    },
  },
  delegatesVoted: {
    "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": "CASTED",
    "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 2,
    "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": "CASTED",
  },
};

export const stateAfterStepTwo: VotingState = {
  1: {
    amounts: {
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 1,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0.5,
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 1,
    },
  },
  2: {
    amounts: {
      "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": 1,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0.5,
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 0,
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 0,
    },
  },
  3: {
    amounts: {
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 0,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0,
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 0,
    },
  },
  delegatesVoted: {
    "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": "CASTED",
    "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 2,
    "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": "CASTED",
    "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 1,
  },
};

export const winnerOptionAfterStepTwo =
  "winner is option #1 with 2.5 total votes";

// Step 3 second user votes for option 3
export const secondUserVotesForOptionThree: VoteEvent = {
  optionId: 3,
  votes: [
    {
      fromId: "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
      amount: 1,
      type: "OWN",
    },
  ],
};

export const stateAfterStepThree: VotingState = {
  1: {
    amounts: {
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0,
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 1,
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 1,
    },
  },
  2: {
    amounts: {
      "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": 1,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0,
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 0,
    },
  },
  3: {
    amounts: {
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 1,
    },
  },
  delegatesVoted: {
    "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": "CASTED",
    "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": "CASTED",
    "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": "CASTED",
    "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 1,
  },
};

export const winnerOptionAfterStepThree =
  "winner is option #1 with 2 total votes";

// Step 4 fourth user votes for option 3
export const fourthUserVotesForOptionThree: VoteEvent = {
  optionId: 3,
  votes: [
    {
      fromId: "0x48FA28c7cb2BE9e03ff65491f405907618B73508",
      amount: 1,
      type: "OWN",
    },
    { fromId: "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1", type: "DELEGATED" },
  ],
};

export const stateAfterStepFour: VotingState = {
  1: {
    amounts: {
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0,
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 1,
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 0,
    },
  },
  2: {
    amounts: {
      "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": 1,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0,
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 0,
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 0,
    },
  },
  3: {
    amounts: {
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 1,
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 1,
    },
  },
  delegatesVoted: {
    "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": "CASTED",
    "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": "CASTED",
    "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": "CASTED",
    "0x48FA28c7cb2BE9e03ff65491f405907618B73508": "CASTED",
  },
};
export const winnerOptionAfterStepFour =
  "winner is option #3 with 2 total votes";

// Step 5 second user retracts his vote
export const secondUserRetractsVote = {
  fromId: "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
};

export const stateAfterStepFive: VotingState = {
  1: {
    amounts: {
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0.33,
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 1,
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 0,
    },
  },
  2: {
    amounts: {
      "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": 1,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0.33,
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 0,
    },
  },
  3: {
    amounts: {
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0.33,
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 1,
    },
  },
  delegatesVoted: {
    "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": "CASTED",
    "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 3,
    "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": "CASTED",
    "0x48FA28c7cb2BE9e03ff65491f405907618B73508": "CASTED",
  },
};

export const winnerOptionAfterStepFive =
  "there is a tie among several options with 1.33 total votes";

// Step 6 fourth user retracts his vote
export const fourthUserRetractsVote = {
  fromId: "0x48FA28c7cb2BE9e03ff65491f405907618B73508",
};

export const stateAfterStepSix: VotingState = {
  1: {
    amounts: {
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0.5,
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 1,
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 1,
    },
  },
  2: {
    amounts: {
      "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": 1,
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 0.5,
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": 0,
    },
  },
  3: {
    amounts: {},
  },
  delegatesVoted: {
    "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": "CASTED",
    "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": 2,
    "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": "CASTED",
    "0x48FA28c7cb2BE9e03ff65491f405907618B73508": 1,
  },
};

export const winnerOptionAfterStepSix =
  "winner is option #1 with 2.5 total votes";
