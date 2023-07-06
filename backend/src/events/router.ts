import express from "express";

import { create, findAll } from "./service";

const eventsRouter = express.Router();

eventsRouter.get("/", async (_req, res) => {
  try {
    const items = await findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send({});
  }
});

eventsRouter.post("/", async (req, res) => {
  try {
    const event = req.body;

    const newEvent = await create(event);

    res.status(201).json(newEvent);
  } catch (e) {
    res.status(500).send({});
  }
});

export default eventsRouter;
