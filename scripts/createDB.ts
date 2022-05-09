// @ts-nocheck
const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");

async function main() {
  const ipfs = await IPFS.create();
  const orbitdb = await OrbitDB.createInstance(ipfs);
  const docstore = await orbitdb.docstore("delegate_list");
  
  const value = docstore.get("0x");
  console.log(value);
    // .then((value) => console.log(value));
}

main();
