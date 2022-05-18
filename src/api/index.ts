import axios, { AxiosResponse } from "axios";
import { DelegationGraph, Governor } from "../types/delegationGraph";
import { apiUrl } from "./constants";

export const getDelegationGraph = async <T>() => {
  const { data } = await axios.get<T, AxiosResponse<DelegationGraph>>(apiUrl);
  return data;
};

export const updateDelegationGraph = async (
  userId: Governor["id"],
  delegateId: Governor["id"]
) => {
  await axios.post(
    apiUrl,
    {
      userId,
      delegateId,
    }
  );
};

export const registerVoter = async (
  userId: Governor["id"],
  name: Governor['name'],
) => {
  await axios.post(
    `${apiUrl}/register`,
    {
      userId,
      name,
    }
  );
};
