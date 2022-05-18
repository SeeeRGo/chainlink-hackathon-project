import React, { useCallback, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { DelegationDashboard } from "./components/DelegationDashboard";
import { Navigation } from "./components/Navigation";
import { VotingBooth } from "./components/VotingBooth";
import { Results } from "./components/Results";
import { initialState } from "../tests/fixtures/votingState.fixtures";
import { DelegationGraph } from "./types/delegationGraph";
import { getDelegationGraph, updateDelegationGraph } from "./api";

const Layout = () => {
  return (
    <main>
      <Navigation />
      <Outlet />
    </main>
  );
};

export const App = () => {
  const [graph, setGraph] = useState<DelegationGraph>({});
  const getData = useCallback(async () => {
    getDelegationGraph().then((data) => setGraph(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="vote" element={<VotingBooth getData={getData} />} />
          <Route
            path="delegate"
            element={
              <DelegationDashboard
                graph={graph}
                getData={getData}
                onToggleDelegate={async (userId, delegateId) => {
                  await updateDelegationGraph(userId, delegateId);
                }}
              />
            }
          />
          <Route
            path="results"
            element={
              <Results delegationGraph={graph} votingState={initialState} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
