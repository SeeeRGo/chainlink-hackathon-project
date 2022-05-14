import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';

import createDb from "./db";
import { toggleDelegate } from "../src/utils/toggleDelegate";
import { DelegateUpdate } from "./types";

dotenv.config();

const app: Express = express();
app.use(express.json()) // To parse the incoming requests with JSON payloads
const port = process.env['PORT'];

createDb().then((db) => {
  //@ts-ignore
  app.get("/", (req: Request, res: Response) => {
    const data = db.get("delegationGraph")[0]?.data || {}
    res.send(data);
  });

  app.post("/", async <P, T>(req: Request<P, T, DelegateUpdate>, res: Response) => {    
    const { delegateId, userId } = req.body;
    const oldDelegationGraph = db.get("delegationGraph")[0]?.data || {};

    if(!oldDelegationGraph) {
      res.status(400).send('Bad request')
    } else {
      const newDelegationGraph = toggleDelegate(oldDelegationGraph, userId, delegateId);
      
      await db.put({ _id: "delegationGraph", data: newDelegationGraph });
      res.status(200).send('OK');
    }
  });
  app.listen(port, () => {
  
    console.log(
      `⚡️[server]: Server is running at https://localhost:${port}`
    );
  });
})
