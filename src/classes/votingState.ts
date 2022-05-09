import range from "just-range";
import { Governor } from "../types/delegationGraph";

import { State } from "../types/votingState";

export class VotingState implements State {
  data: State["data"];

  static createEmpty(numOptions: number) {
    const data: State["data"] = {
      delegatesVoted: {},
    };

    range(1, numOptions + 1).forEach((optionId) => {
      data[optionId] = { amounts: {} };
    });

    return new VotingState(data);
  }

  constructor(data: State["data"]) {
    this.data = data;
  }

  addVote(fromId: Governor['id'], optionId: number, amount: number): State['data'] {
    console.log(fromId, optionId, amount)
    return this.data
  };
}
