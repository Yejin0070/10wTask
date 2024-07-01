import { Route, Routes } from "react-router-dom";
import "./common.css";
import Total from "./Total/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Total />}></Route>
    </Routes>
  );
}

export default App;
