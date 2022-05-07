import range from "just-range";

import { State } from "../types/votingState";


class VotingState implements State {
  private data: State["data"];

  static createEmpty(numOptions: number) {
    const data: State["data"] = {
      delegatesVoted: {},
    };

    range(1, numOptions + 1).forEach((optionId) => {
      data[optionId] = { amounts: {} };
    });

    return new VotingState(data)
  }

  constructor(data: State["data"]) {
    this.data = data;
  }
}