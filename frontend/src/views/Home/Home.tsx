import { Grid } from "@mui/material";
import { useQuery } from "react-query";

import Card from "../../components/Card/Card";

export interface Event {
  id: number;
  name: string;
  description: string;
  location: string;
  date: string;
}

const getAllEvents = async (): Promise<Event[]> => {
  const response = await fetch("http://localhost:3001/api/events");
  return response.json();
};

export default function HomePage() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["events-list"],
    queryFn: () => getAllEvents(),
  });

  if (isFetching) {
    return <p>Fetching...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }

  return (
    <Grid
      style={{
        marginTop: "32px",
        padding: "8px",
      }}
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {data?.map((event) => (
        <Grid item xs={4} sm={4} md={4} key={event.id}>
          <Card {...event} />
        </Grid>
      ))}
    </Grid>
  );
}
