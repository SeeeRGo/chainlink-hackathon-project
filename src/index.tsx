import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DelegationDashboard } from "./components/DelegationDashboard";
import { Navigation } from "./components/Navigation";
import { VotingBooth } from "./components/VotingBooth";
import { delegationGraph as initialDelegationGraph } from "../tests/fixtures/delegationGraph.fixtures";
import { toggleDelegate } from "./utils/toggleDelegate";

export const App = () => {
  const [delegationGraph, setDelegationGraph] = useState(initialDelegationGraph);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/vote" element={<VotingBooth />} />
        <Route
          path="/delegate"
          element={
            <DelegationDashboard
              users={delegationGraph}
              onToggleDelegate={(userId, delegateId) => {
                setDelegationGraph(toggleDelegate(delegationGraph, userId, delegateId));
              }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
