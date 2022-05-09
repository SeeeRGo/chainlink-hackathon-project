import { DelegationGraph } from "../../src/types/delegationGraph";

export const delegationGraph: DelegationGraph = {
  "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": {
    id: "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051",
    name: "Spider-Man",
    followers: [
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
    ],
    delegates: [],
  },
  "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": {
    id: "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
    name: "Flash",
    followers: [],
    delegates: [
      "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051",
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508",
    ],
  },
  "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": {
    id: "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
    name: "Black Widow",
    followers: [
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508",
    ],
    delegates: ["0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051"],
  },
  "0x48FA28c7cb2BE9e03ff65491f405907618B73508": {
    id: "0x48FA28c7cb2BE9e03ff65491f405907618B73508",
    name: "Captain Marvel",
    followers: ["0x837D25A0a94Fb6Bf211c945F07A5736640b490D1"],
    delegates: ["0x90CaD87e1268Fedff6169507ed628C3b243C14f4"],
  },
};

export const delegationGraphAfterAddingDelegate: DelegationGraph = {
  ...delegationGraph,
  "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051": {
    id: "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051",
    name: "Spider-Man",
    followers: [
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
      "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
    ],
    delegates: ["0x48FA28c7cb2BE9e03ff65491f405907618B73508"],
  },
  "0x48FA28c7cb2BE9e03ff65491f405907618B73508": {
    id: "0x48FA28c7cb2BE9e03ff65491f405907618B73508",
    name: "Captain Marvel",
    delegates: ["0x90CaD87e1268Fedff6169507ed628C3b243C14f4"],
    followers: [
      "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
      "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051",
    ],
  },
};

export const delegationGraphAfterAddingFollower = delegationGraphAfterAddingDelegate;

export const delegationGraphAfterRemovingDelegate: DelegationGraph = {
  ...delegationGraph,
  "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1": {
    id: "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
    name: "Flash",
    followers: [],
    delegates: [
      "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051",
      "0x48FA28c7cb2BE9e03ff65491f405907618B73508",
    ],
  },
  "0x90CaD87e1268Fedff6169507ed628C3b243C14f4": {
    id: "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
    name: "Black Widow",
    delegates: ["0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051"],
    followers: ["0x48FA28c7cb2BE9e03ff65491f405907618B73508"],
  },
};

export const delegationGraphAfterRemovingFollower = delegationGraphAfterRemovingDelegate;
