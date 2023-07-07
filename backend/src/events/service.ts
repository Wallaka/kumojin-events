import type { Event } from "./types";

// For this project purpose, we won't use a database but just an array of object in memory
const events = [
  {
    id: 1,
    name: "K-pop random dance",
    description:
      "This is a random dance event around k-pop popular songs, come and dance without shame, have fun !!",
    location: "Montreal",
    date: "2023-02-25T14:28:18Z",
  },
  {
    id: 2,
    name: "Nightwish concert",
    description:
      "Come and see nightwish's latest show with their new album 'I love the snow'",

    location: "Helsinki",
    date: "2023-06-05T09:25:38Z",
  },
  {
    id: 3,
    name: "Pocha MTL",
    description:
      "Come and discover and korean culture during our 4 days events at griffintown, pocha mtl",

    location: "Montreal",
    date: "2023-01-17T01:29:54Z",
  },
];

export const findAll = async (): Promise<Event[]> => events;

export const create = async (newEvent: Event): Promise<Event> => {
  events.push(newEvent);
  return newEvent;
};
