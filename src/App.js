import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Landing Page/Home";
import Main from "./pages/Dashboard/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Main />} />
    </Routes>
  );
}

export default App;
