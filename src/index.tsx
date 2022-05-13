import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DelegationDashboard } from "./components/DelegationDashboard";
import { Navigation } from "./components/Navigation";
import { VotingBooth } from "./components/VotingBooth";
import { toggleDelegate } from "./utils/toggleDelegate";
import { Results } from "./components/Results";
import { initialState } from "../tests/fixtures/votingState.fixtures";
import { DBContext } from "./contexts/DBContext";

export const App = () => {
  const { graph, setData } = useContext(DBContext);
  useEffect(() => {
    if (graph) {
      console.log("data", graph);
    }
  }, [graph]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/vote" element={<VotingBooth />} />
        <Route
          path="/delegate"
          element={
            <DelegationDashboard
              users={graph}
              onToggleDelegate={(userId, delegateId) => {
                const newData = toggleDelegate(graph, userId, delegateId);
                console.log("newData in app", newData);
                
                setData(newData);
              }}
            />
          }
        />
        <Route
          path="/results"
          element={
            <Results delegationGraph={graph} votingState={initialState} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
