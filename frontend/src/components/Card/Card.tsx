import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type Props = {
  name: string;
  description: string;
  location: string;
  date: string;
};

export default function BasicCard({
  name,
  description,
  location,
  date,
}: Props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" noWrap>
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="subtitle1">Location: {location}</Typography>
        <Typography variant="subtitle1">
          Date: {new Date(date).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
