import "./App.css";
import { NavBar } from "./NavBar";
import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { Home } from "./Home";
import { About } from "./About";
import { Experience } from "./Experience";
import FloatingDownloadButton from "./FloatingDownloadButton";
import resumePdf from "./assets/SHRIYAM_SHRIVASTAVA_Resume.pdf";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const scrollTop = scrollContainer.scrollTop;
      const containerHeight = scrollContainer.clientHeight;

      const sectionHeight = containerHeight;
      const currentSection = Math.round(scrollTop / sectionHeight);

      const sections = ["Home", "About", "Experience"];
      const newPage = sections[currentSection] || "Home";

      if (newPage !== currentPage) {
        setCurrentPage(newPage);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [currentPage]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Box
        ref={scrollContainerRef}
        sx={{
          height: "calc(100vh - 80px)",
          overflowY: "auto",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}
      >
        <Home />
        <About />
        <Experience />
      </Box>
      <FloatingDownloadButton
        onClick={() => {
          const link = document.createElement("a");
          link.href = resumePdf;
          link.download = "SHRIYAM_SHRIVASTAVA_Resume.pdf";
          link.click();
        }}
        tooltip="Download Résumé"
        storageKey="resume-download-fab"
        initialOffset={{ right: 12, bottom: 12 }}
        size="small"
      />
    </Box>
  );
}

export default App;
