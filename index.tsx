import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./src";
import { store } from "./src/store";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { DBProvider } from "./src/contexts/DBContext";

const getLibrary = (
  provider:
    | ethers.providers.ExternalProvider
    | ethers.providers.JsonRpcFetchFunc
) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

const root = ReactDOM.createRoot(
  document.getElementById("app-root") || document.body
);

root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <DBProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </DBProvider>
  </Web3ReactProvider>
);
