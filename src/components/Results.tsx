import React, { useEffect, useState } from 'react';
import { useContract } from '../hooks';

export const Results = () => {
  const contract = useContract();
  const [proposals, setProposals] = useState([]);
  const [results, setResults] = useState('results are unknown');
  // delegationGraph

  useEffect(() => {
    async function getOptions() {
      const options = await contract["getProposals"]();
      setProposals(options);
    }

    getOptions();
  }, []);

  useEffect(() => {
    async function getResults() {
      let res = ''
      for (let i = 1; i < proposals.length; i++) {
        const [proposal, supporters] = await contract["proposalSupporters"](i);
        res += `Proposal ${proposal} is supported By ${supporters.join(' --- ')}`
      }
      setResults(res);
    }

    getResults();
  }, [proposals]);

  return (
    <div>
      <p>{results}</p>
    </div>
  );
}