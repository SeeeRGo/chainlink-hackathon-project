import React, { useState } from 'react';
import { Web3Storage } from "web3.storage";

const cid = "bafybeidnemzbipxvashygeqsmllrw5pqerfu6xmhfplnfns3rarposijky";
export const VotingState = () => {
  const [votingState, setVotingState] = useState("Voting state placeholder");
  const getVotingState = async () => {
    const token = process.env["WEB3_STORAGE_API_TOKEN"];
    if (!token) return;

    const client = new Web3Storage({ token });
    const res = await client.get(cid);
    if (!res) return
    const files = await res.files()
    console.log('response files', files);

    const fr = new FileReader();

    fr.addEventListener("load", (e) => {
      if (typeof fr.result === 'string') {
        console.log('got some files', e.target?.result, JSON.parse(fr.result));
        setVotingState("got some files" + fr.result);
      }
    });
    const file = files[0]
    if (file) {
       fr.readAsText(file);
    };

  }
  return (
    <>
    <p>
      {votingState}
    </p>
    <button onClick={getVotingState}>Get Voting State</button>
    </>
  )
}