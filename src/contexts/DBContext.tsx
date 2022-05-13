// @ts-nocheck
import React, { useEffect, useState } from "react";
import { create } from "ipfs";
import OrbitDB from "orbit-db";
import { delegationGraph } from "../../tests/fixtures/delegationGraph.fixtures";
import { DelegationGraph } from "../types/delegationGraph";

interface DBContextProps {
  db: any;
  graph: DelegationGraph;
  setData: (data: DelegationGraph) => void;
}
export const DBContext = React.createContext<DBContextProps>({
  db: null,
  graph: {},
  setData: () => {},
});

interface Props {
  children?: React.ReactNode;
}
export const DBProvider: React.FC<Props> = ({ children }) => {
  const [db, setDb] = useState<any>(null);
  const [graph, setGraph] = useState<DelegationGraph>({});

  useEffect(() => {
    async function createDb() {
      const ipfs = await create({
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

      const db = await orbitdb.docstore("delegate_list");
      await db.load();
      await db.put({ _id: 'delegationGraph', data: delegationGraph})
      const data = db.get("delegationGraph");
      setGraph(data[0].data);
      setDb(db);
    }

    createDb();
  }, []);

  return <DBContext.Provider value={{
    db,
    graph,
    setData: async (newData) => {
      console.log('newData', newData);
      
      await db.put({ _id: "delegationGraph", data: newData });
      const data = db.get("delegationGraph");
      setGraph(data[0].data);
    }
  }}>{children}</DBContext.Provider>;
};
