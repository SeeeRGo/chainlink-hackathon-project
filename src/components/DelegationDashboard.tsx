import { Grid, Typography } from "@material-ui/core";
import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useEffect } from "react";
import { useAccount } from "../hooks";
import { DelegationGraph, Governor } from "../types/delegationGraph";

interface Props {
  graph: DelegationGraph;
  getData: () => Promise<void>;
  onToggleDelegate: (
    userId: Governor["id"],
    delegateId: Governor["id"]
  ) => void;
}

export const DelegationDashboard = ({ graph, getData, onToggleDelegate }: Props) => {
  const account = useAccount();

  useEffect(() => {
    getData();
  }, []);

  const delegates: Governor["delegates"] = account
    ? graph[account]?.delegates ?? []
    : [];
  const followers: Governor["followers"] = account
    ? graph[account]?.followers ?? []
    : [];
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography variant="h4">Your Delegates</Typography>
        <FormGroup>
          {Object.values(graph)
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
                        getData();
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
            {graph[follower]?.name ?? follower}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};
