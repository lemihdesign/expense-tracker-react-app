import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Landing Page/Home";
import BudgetPage from "./pages/Budget/BudgetPage";
import ToDoListPage from "./pages/ToDoList/ToDoListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/budget" element={<BudgetPage />} />
      <Route path="/to-do/" element={<ToDoListPage />} />
      <Route path="/to-do/:filterTask" element={<ToDoListPage />} />
    </Routes>
  );
}

export default App;
