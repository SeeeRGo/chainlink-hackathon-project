import { Grid, Typography } from "@material-ui/core";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { useAccount } from "../hooks";
import { DelegationGraph, Governor } from "../types/delegationGraph";

interface Props {
  users: DelegationGraph;
  onToggleDelegate: (
    userId: Governor["id"],
    delegateId: Governor["id"]
  ) => void;
}

export const DelegationDashboard = ({ users, onToggleDelegate }: Props) => {
  const account = useAccount();

  const delegates: Governor["delegates"] = account
    ? users[account]?.delegates ?? []
    : [];
  const followers: Governor["followers"] = account
    ? users[account]?.followers ?? []
    : [];
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="h4">Your Delegates</Typography>
        <FormGroup>
          {Object.values(users)
            .filter((governor) => governor.id !== account)
            .map((governor) => (
              <FormControlLabel
                key={governor.id}
                control={
                  <Checkbox
                    value={governor.id}
                    checked={delegates.includes(governor.id)}
                    onChange={() => {
                      if (account) {
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
          <Button>
            <Typography>Save</Typography>
          </Button>
          <Button>
            <Typography>Cancel</Typography>
          </Button>
        </div>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4">Your Followers</Typography>
        {followers.map((follower) => (
          <Typography
            style={{ height: "42px", display: "flex", alignItems: "center" }}
          >
            {users[follower]?.name ?? follower}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};
