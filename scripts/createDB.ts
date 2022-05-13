// @ts-nocheck
const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");

async function main() {
  const ipfs = await IPFS.create({
    repo: "/tmp/ipfs-repo",
    start: true,
    preload: {
      enabled: false,
    },
    EXPERIMENTAL: {
      pubsub: true,
    },
    config: {
      Addresses: {
        Swarm: [
          // Use IPFS dev signal server
          // "/dns4/star-signal.cloud.ipfs.team/wss/p2p-webrtc-star",
          // "/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star",
          // Use IPFS dev webrtc signal server
          // "/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
          // "/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star/",
          // "/dns4/webrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star/",
          // Use local signal server
          // '/ip4/0.0.0.0/tcp/9090/wss/p2p-webrtc-star',
        ],
      },
    },
  });
  
  const orbitdb = await OrbitDB.createInstance(ipfs);
  // const docstore = await orbitdb.docstore("delegate_list");

  const db = await orbitdb.docstore("delegate_list");
  console.log("Loading database...");
  await db.load();

  // const value = { _id: "peer1", avatar: 'creature' };
  // await db.put(value);
  // console.log('put value');
  const res = db.get("peer1");
  console.log('res', res);
  await db.close();
  console.log('closed db');
  return
}

main();
