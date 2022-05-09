import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import React, { useEffect } from "react";
import { DelegationGraph, Governor } from "../types/delegationGraph";
import { Injected } from "./VotingBooth";

interface Props {
  users: DelegationGraph;
  onToggleDelegate: (
    userId: Governor["id"],
    delegateId: Governor["id"],
  ) => void;
}

export const DelegationDashboard = ({
  users,
  onToggleDelegate,
}: Props) => {
  const { activate, account } = useWeb3React();

  useEffect(() => {
    activate(Injected);
  }, []);

  const delegates: Governor['delegates'] = account ? users[account]?.delegates ?? [] : [];
  const followers: Governor['followers'] = account ? users[account]?.followers ?? [] : [];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <h3>Your Delegates</h3>
        <FormGroup>
          {Object.values(users).map((governor) => (
            <FormControlLabel
              control={
                <Checkbox
                  value={governor.id}
                  checked={delegates.includes(governor.id)}
                  onChange={() => {
                    if(account) {
                      onToggleDelegate(account, governor.id);
                    }
                  }}
                />
              }
              label={governor.name}
            />
          ))}
        </FormGroup>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </div>
      </div>
      <div>
        <h3>Your Followers</h3>
        {followers.map((follower) => (
          <p>{users[follower]?.name ?? follower}</p>
        ))}
      </div>
    </div>
  );
};
