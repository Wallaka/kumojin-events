import CssBaseline from "@mui/material/CssBaseline";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import HomePage from "./views/Home/Home";
import Create from "./views/Create/Create";

export default function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
