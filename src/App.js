import { Route, Routes } from "react-router-dom";
import "./common.css";
import Total from "./Total/index";
import StorePage from "./StorePage/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Total />}></Route>
      <Route path="/storePage/:id" element={<StorePage />}></Route>
    </Routes>
  );
}

export default App;
