import "./App.css";
import { NavBar } from "./NavBar";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  return (
    <>
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;
