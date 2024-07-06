import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./common.css";
import Total from "./Total/index";
import StorePage from "./StorePage/index";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Total />}></Route>
        <Route path="/storePage/:id" element={<StorePage />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
