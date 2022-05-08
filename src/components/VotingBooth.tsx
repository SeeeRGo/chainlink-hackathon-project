import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const VotingBooth = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { activate, deactivate, active, chainId, account } = useWeb3React();


  return (
    <>
      <button
        onClick={() => {
          activate(Injected);
        }}
      >
        Metamask
      </button>
      <button onClick={deactivate}>Disconnect</button>
      <div>{`Connection Status: ${active}`}</div>
      <div>{`Account: ${account}`}</div>
      <div>{`Network ID: ${chainId}`}</div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              value={1}
              checked={selected === 1}
              onChange={() => setSelected(1)}
            />
          }
          label="Option 1"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={2}
              checked={selected === 2}
              onChange={() => setSelected(2)}
            />
          }
          label="Option 2"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={3}
              checked={selected === 3}
              onChange={() => setSelected(3)}
            />
          }
          label="Option 3"
        />
        <FormControlLabel
          control={
            <Checkbox
              value={4}
              checked={selected === 4}
              onChange={() => setSelected(4)}
            />
          }
          label="Option 4"
        />
      </FormGroup>
      <Button
        onClick={() =>
          console.log(
            `Voting for option #${selected} There will be blockchain integration soon`
          )
        }
      >
        VOTE!
      </Button>
    </>
  );
};
