import "./App.css";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { Box } from "@mui/material";
import { Home } from "./Home";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Array of sections to render
  const sections = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Projects" },
    { id: 4, title: "Contact" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden", // Prevent body scroll
      }}
    >
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Box
        sx={{
          height: "calc(100vh - 80px)", // Full height minus navbar
          overflowY: "auto",
          scrollSnapType: "y mandatory", // Enable smooth scrolling between sections
          scrollBehavior: "smooth", // Smooth scrolling animation
        }}
      >
        {sections.map((section) => (
          <Home key={section.id} sectionNumber={section.id} />
        ))}
      </Box>
    </Box>
  );
}

export default App;
