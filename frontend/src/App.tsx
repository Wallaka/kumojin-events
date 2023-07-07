import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Nav from "./components/Nav/Nav";
import HomePage from "./views/Home/Home";
import Create from "./views/Create/Create";

const REACT_QUERY_CONFIG = {
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: 0,
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      cacheTime: 0,
      retry: false,
    },
  },
};
// Create a query client
const queryClient = new QueryClient(REACT_QUERY_CONFIG);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
