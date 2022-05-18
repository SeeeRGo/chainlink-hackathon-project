import React, { useEffect, useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useAccount, useContract } from "../hooks";
import { CircularProgress } from "@material-ui/core";
import { registerVoter } from "../api";

interface Props {
  getData: () => Promise<void>
}
export const VotingBooth = ({ getData }: Props) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [proposals, setProposals] = useState([]);
  const contract = useContract();
  const account = useAccount();

  useEffect(() => {
    async function getOptions() {
      const options = await contract["getProposals"]();
      setProposals(options);
    }
    async function getVote() {
      if (account) {
        const vote = await contract["getVote"]();
        if (vote !== undefined) {
          setSelected(vote.toNumber());
        }
      }
    }

    getOptions();
    getVote();
  }, [account]);

  return selected !== null ? (
    <>
      <FormGroup>
        {proposals.map((proposal, i) => (
          <FormControlLabel
            key={proposal}
            control={
              <Checkbox
                value={i}
                checked={selected === i}
                onChange={() => setSelected(i)}
              />
            }
            label={i === 0 ? "CLEAR VOTE" : proposal}
          />
        ))}
      </FormGroup>
      <Button
        onClick={async () => {
          if (account) {
            await contract["vote"](selected, { gasLimit: 300000 });
            await registerVoter(account, account);
            await getData();
          }
        }}
      >
        VOTE!
      </Button>
    </>
  ) : <CircularProgress />;
};
