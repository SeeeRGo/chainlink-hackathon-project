import {
  OptionId,
  VotingState,
  Vote,
} from "../../src/types/votingState";

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

// TODO test votes array creation from just voterId according to initial delegationGraph
export const firstUserVotesForOptionTwo: { optionId: OptionId; votes: Vote[] } = {
  optionId: 2,
  votes: [
    { fromId: 1, amount: 1, type: "OWN" },
    { fromId: 2, type: "DELEGATED" },
    { fromId: 3, type: "DELEGATED" },
  ],
};
// State after firstUserVotesForOptionTwo

export const stateAfterStepOne: VotingState = {
  1: {
    amounts: {},
  },
  2: {
    amounts: {
      1: 1,
      2: 1,
      3: 1,
    },
  },
  3: {
    amounts: {},
  },
  delegatesVoted: {
    1: "CASTED",
    2: 1,
    3: 1,
  },
};

export const winnerOptionAfterStepOne = "winner is option #2 with 3 total votes";

// Step 2 third user votes for option 1
export const thirdUserVotesForOptionOne: { optionId: OptionId; votes: Vote[] } = {
  optionId: 1,
  votes: [
    { fromId: 3, amount: 1, type: "OWN" },
    { fromId: 2, type: "DELEGATED" },
    { fromId: 4, type: "DELEGATED" },
  ],
};

export const stateAfterStepTwo: VotingState = {
  1: {
    amounts: {
      2: 0.5,
      3: 1,
      4: 1,
    },
  },
  2: {
    amounts: {
      1: 1,
      2: 0.5,
      3: 0,
    },
  },
  3: {
    amounts: {},
  },
  delegatesVoted: {
    1: "CASTED",
    2: 2,
    3: "CASTED",
    4: 1,
  },
};

export const winnerOptionAfterStepTwo = "winner is option #1 with 2.5 total votes";

// Step 3 second user votes for option 3
export const secondUserVotesForOptionThree: { optionId: OptionId; votes: Vote[] } = {
  optionId: 3,
  votes: [{ fromId: 2, amount: 1, type: "OWN" }],
};

export const stateAfterStepThree: VotingState = {
  1: {
    amounts: {
      2: 0,
      3: 1,
      4: 1,
    },
  },
  2: {
    amounts: {
      1: 1,
      2: 0,
      3: 0,
    },
  },
  3: {
    amounts: {
      2: 1,
    },
  },
  delegatesVoted: {
    1: "CASTED",
    2: "CASTED",
    3: "CASTED",
    4: 1,
  },
};

export const winnerOptionAfterStepThree = "winner is option #1 with 2 total votes";

// Step 4 fourth user votes for option 3
export const fourthUserVotesForOptionThree: { optionId: OptionId; votes: Vote[] } = {
  optionId: 3,
  votes: [
    { fromId: 4, amount: 1, type: "OWN" },
    { fromId: 2, type: 'DELEGATED' },
  ],
};

export const stateAfterStepFour: VotingState = {
  1: {
    amounts: {
      2: 0,
      3: 1,
      4: 0,
    },
  },
  2: {
    amounts: {
      1: 1,
      2: 0,
      3: 0,
    },
  },
  3: {
    amounts: {
      2: 1,
      4: 1,
    },
  },
  delegatesVoted: {
    1: "CASTED",
    2: "CASTED",
    3: "CASTED",
    4: "CASTED",
  },
};
export const winnerOptionAfterStepFour = "winner is option #3 with 2 total votes";

// Step 5 second user retracts his vote
export const secondUserRetractsVote = {
  fromId: 2,
}


export const stateAfterStepFive: VotingState = {
  1: {
    amounts: {
      2: 0.33,
      3: 1,
      4: 0,
    },
  },
  2: {
    amounts: {
      1: 1,
      2: 0.33,
      3: 0,
    },
  },
  3: {
    amounts: {
      2: 0.33,
      4: 1,
    },
  },
  delegatesVoted: {
    1: "CASTED",
    2: 3,
    3: "CASTED",
    4: "CASTED",
  },
};

export const winnerOptionAfterStepFive = "there is a tie among several options with 1.33 total votes";

// Step 6 fourth user retracts his vote
export const fourthUserRetractsVote = {
  fromId: 4,
}

export const stateAfterStepSix: VotingState = {
  1: {
    amounts: {
      2: 0.5,
      3: 1,
      4: 1,
    },
  },
  2: {
    amounts: {
      1: 1,
      2: 0.5,
      3: 0,
    },
  },
  3: {
    amounts: {
    },
  },
  delegatesVoted: {
    1: "CASTED",
    2: 2,
    3: "CASTED",
    4: 1,
  },
};

export const winnerOptionAfterStepSix = "winner is option #1 with 2.5 total votes";
