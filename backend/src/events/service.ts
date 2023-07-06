import type { Event } from "./types";

// For this project purpose, we won't use a database but just an array of object in memory
const events = [
  {
    id: 1,
    name: "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",
    description:
      "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",
    location: "Cabatuan",
    date: "2023-02-25T14:28:18Z",
    tz: "Asia/Manila",
    address: "11874 Dapin Hill",
  },
  {
    id: 2,
    name: "massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus",
    description:
      "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",

    location: "Haparanda",
    date: "2023-06-05T09:25:38Z",
    tz: "Europe/Helsinki",
    address: "65899 Warrior Trail",
  },
  {
    id: 3,
    name: "faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin",
    description:
      "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",

    location: "Shal’skiy",
    date: "2023-01-17T01:29:54Z",
    tz: "Europe/Moscow",
    address: "52067 Thompson Center",
  },
  {
    id: 4,
    name: "habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis",
    description:
      "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",

    location: "Novovorontsovka",
    date: "2022-03-14T16:29:54Z",
    tz: "Europe/Zaporozhye",
    address: "9587 Linden Point",
  },
  {
    id: 5,
    name: "et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam",
    description:
      "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",

    location: "Lauro de Freitas",
    date: "2022-04-10T10:54:50Z",
    tz: "America/Bahia",
    address: "04151 Holy Cross Hill",
  },
];

export const findAll = async (): Promise<Event[]> => events;

export const create = async (newEvent: Event): Promise<Event> => {
  events.push(newEvent);
  return newEvent;
};
