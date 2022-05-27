import clone from 'just-clone';
import React, { useEffect, useState } from 'react';
import { useContract } from '../hooks';
import { DelegationGraph } from '../types/delegationGraph';
import { VotingState } from '../types/votingState';
import { addVotes } from '../utils/addVotes';
import { calculateVotesToAdd } from '../utils/calculateVotesToAdd';

interface Props {
  delegationGraph: DelegationGraph;
  votingState: VotingState;
}
export const Results = ({ delegationGraph, votingState }: Props) => {
  const contract = useContract();
  const [proposals, setProposals] = useState([]);
  const [calculatedState, setCalculatedState] = useState(votingState);

  useEffect(() => {
    async function getOptions() {
      const options = await contract["getProposals"]();
      setProposals(options);
    }

    getOptions();
  }, []);

  useEffect(() => {
    async function getResults() {
      let newState = clone(votingState);
      for (let i = 1; i < proposals.length; i++) {
        const [_, supporters] = await contract["proposalSupporters"](i);
        console.log('i', i);
        console.log('supporters', supporters);
        
        for (let j = 0; j < supporters.length; j++) {
          const fromId = supporters[j];
          const optionId = i
          const voteEvent = calculateVotesToAdd(
            delegationGraph,
            fromId,
            optionId
          );
          
          newState = addVotes(newState, voteEvent);
        }
      }
      setCalculatedState(newState);
    }

    getResults();
  }, [proposals]);  

  return (
    <div>
      {proposals.slice(1).map((proposal, index) => {
        const amounts = calculatedState[index + 1]?.amounts
        if (amounts) {
          const calculatedAmount = Object
          .values(amounts)
          .reduce((total, currentAmount) => total + currentAmount, 0)
          return (
            <p>{`Proposal ${proposal} is supported By ${calculatedAmount} total VotingPower`}</p>
          );
        }
        return (
          <p>{`Proposal ${proposal} is supported By UNDETERMINED total VotingPower`}</p>
        );
      })}
    </div>
  );
}