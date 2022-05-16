import { InjectedConnector } from "@web3-react/injected-connector";

export const contractAddress = "0x8e61d57D7538A4D6970c1554c7e28EB4aAd69B8C";

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});
