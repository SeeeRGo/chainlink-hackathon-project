import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { delegationGraph } from "../tests/fixtures/delegationGraph.fixtures";
import { DelegationDashboard } from "./components/DelegationDashboard";
import { Navigation } from "./components/Navigation";
import { VotingBooth } from "./components/VotingBooth";

export const App = () => {
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
                console.log("userId", userId, "delegateId", delegateId);
              }}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
