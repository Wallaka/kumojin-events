export interface Event {
  id: number;
  name: string;
  location: string;
  date: Date | string;
  tz: string;
  address: string;
}

export interface Events {
  events: Event[];
}
