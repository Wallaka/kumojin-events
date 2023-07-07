import { Grid } from "@mui/material";

import Card from "../../components/Card/Card";
import Nav from "../../components/Nav/Nav";

export default function HomePage() {
  return (
    <>
      <Grid
        style={{
          border: "1px solid yellow",
          marginTop: "32px",
          padding: "8px",
        }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Card />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
