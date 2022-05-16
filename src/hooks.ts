import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Contract, ethers } from "ethers";

import type { RootState, AppDispatch } from "./store";
import abi from "../build/contracts/Ballot.json";
import { contractAddress, Injected } from "./constants";
import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const signer = provider.getSigner();
  const contract = new Contract(contractAddress, abi.abi, signer);

  return contract;
};

export const useAccount = () => {
  const { activate, account } = useWeb3React();

  useEffect(() => {
    if (!account) {
      activate(Injected);
    }
  }, [activate, account]);

  return account;
};
