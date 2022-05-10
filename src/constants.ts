import { InjectedConnector } from "@web3-react/injected-connector";

export const contractAddress = "0x363397F1942A51a53E9f72c90C3953A46ea12BF9";

export const participatingAddresses = [
  "0x26784F64FeB6b1E0a7B3229D435214bfCe2B2051",
  "0x837D25A0a94Fb6Bf211c945F07A5736640b490D1",
  "0x90CaD87e1268Fedff6169507ed628C3b243C14f4",
  "0x48FA28c7cb2BE9e03ff65491f405907618B73508",
  "0x55Fa141D09a28e4cf8B1958Ef869446c2512ca29",
];

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});
