export interface Event {
  id: number;
  name: string;
  description: string;
  location: string;
  date: string;
}

export type BaseEvent = Pick<
  Event,
  "name" | "description" | "location" | "date"
>;
