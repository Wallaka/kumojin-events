import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Kumojin
            </NavLink>
          </Typography>

          <NavLink to="/create" style={{ textDecoration: "none" }}>
            Add an event
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
