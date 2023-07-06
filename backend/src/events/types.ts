export interface Event {
  id: number;
  name: string;
  description: string;
  location: string;
  date: string;
  tz: string;
  address: string;
}

export interface Events {
  events: Event[];
}
