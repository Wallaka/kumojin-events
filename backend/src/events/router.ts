import express from "express";

import { create, findAll } from "./service";
import type { BaseEvent } from "./types";

const eventsRouter = express.Router();

eventsRouter.get("/", async (_req, res) => {
  try {
    const items = await findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send({
      message: "An error has occured",
    });
  }
});

eventsRouter.post("/", async (req, res) => {
  try {
    const event: BaseEvent = req.body;

    if (event.name.length > 32) {
      throw new Error("Name must not exceed 32 characters");
    }

    const newEvent = await create({
      ...event,
      id: Math.floor(Math.random() * 100),
    });

    res.status(201).json(newEvent);
  } catch (e: any) {
    res.status(500).send({
      message: e.message,
    });
  }
});

export default eventsRouter;
