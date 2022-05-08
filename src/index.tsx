// import React from "react";
// import { stateAfterStepFive } from "../tests/fixtures/votingState.fixtures";
// import { VotingForm } from "./components/VotingForm";
// import { VotingState } from "./components/VotingState";
// import { Web3Storage } from 'web3.storage';

// export const App = () => {
//   const onUploadFile = async () => {
//     const token = process.env['WEB3_STORAGE_API_TOKEN'];
//     if(!token) return

//     const json = JSON.stringify(stateAfterStepFive);

//     const blob = new File([json], "stateAfterStepFive", {
//       type: "application/json",
//     });

//     const storage = new Web3Storage({ token });

//     console.log(`Uploading file`);
//     const cid = await storage.put([blob]);
//     console.log("Content added with CID:", cid);
//   }
//   return (
//     <>
//       <VotingState />
//       <VotingForm onClick={onUploadFile} />
//     </>
//   );
// };

import React from 'react'
import { VotingBooth } from './components/VotingBooth'

export const App = () => { 
  return (
    <VotingBooth />
  )
}