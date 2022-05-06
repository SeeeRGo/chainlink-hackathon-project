import { DelegationGraph, Governor } from "../types/delegationGraph";
import { OptionId } from "../types/votingState";

export const calculateVotesToAdd = (delegationGraph: DelegationGraph, fromId: Governor['id'], optionId: OptionId) => {
  console.log(delegationGraph, fromId, optionId);
  return
}
