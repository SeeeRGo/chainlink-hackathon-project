import { Governor } from "../../playground/logic-examples";

type DelegationGraph = Record<Governor["id"], Governor>;
export const delegationGraph: DelegationGraph = {
  1: {
    id: 1,
    followers: [2, 3],
    delegates: [],
  },
  2: {
    id: 2,
    followers: [],
    delegates: [1, 3, 4],
  },
  3: {
    id: 3,
    followers: [2, 4],
    delegates: [1],
  },
  4: {
    id: 4,
    followers: [2],
    delegates: [3],
  },
};

export const delegationGraphAfterAddingDelegate: DelegationGraph = {
  ...delegationGraph,
  1: {
    ...delegationGraph.1,
    delegates: [4]
  },
  4: {
    ...delegationGraph.4,
    followers: [2, 1]
  }
};

export const delegationGraphAfterAddingFollower = delegationGraphAfterAddingDelegate;

export const delegationGraphAfterRemovingDelegate: DelegationGraph = {
  ...delegationGraph,
  2: {
    ...delegationGraph.2,
    delegates: [1, 4]
  },
  3: {
    ...delegationGraph.3,
    followers: [4]
  }
};

export const delegationGraphAfterRemovingFollower = delegationGraphAfterRemovingDelegate;