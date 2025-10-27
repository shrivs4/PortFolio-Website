import { Box, Paper, Typography } from "@mui/material";
import type { NavbarType } from "./types/navbarType";

export const NavBar = ({ currentPage, setCurrentPage }: NavbarType) => {
  const pageMap = {
    Home: "home",
    Services: "services",
    About: "about",
    Projects: "projects",
    Contact: "contact",
  };

  const handleScroll = (id: string) => {
    console.log(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: id === "contact" || id === "about" ? 80 : 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: {
            xs: "90%",
            sm: "70%",
            md: "50%",
            lg: "30%",
          },
          borderRadius: 20,
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: {
            xs: 2,
            sm: 2,
            md: 2,
          },
        }}
      >
        {["Home", "Services", "About", "Projects", "Contact"].map((item) => (
          <Typography
            key={item}
            variant="body1"
            sx={{
              cursor: "pointer",
              fontSize: {
                xs: "0.7rem",
                sm: "0.9rem",
                md: "1rem",
              },
              ...(currentPage === item && {
                backgroundColor: "black",
                opacity: 0.5,
                color: "white",
                borderRadius: "20px",
                padding: "8px 12px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "black",
                  opacity: 0.7,
                  color: "white",
                  transform: "scale(1.05)",
                },
              }),
              ...(currentPage !== item && {
                padding: "8px 12px",
                borderRadius: "20px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  transform: "scale(1.05)",
                },
              }),
            }}
            onClick={() => {
              handleScroll(pageMap[item as keyof typeof pageMap]);
              setCurrentPage(item);
            }}
          >
            {item}
          </Typography>
        ))}
      </Paper>
    </Box>
  );
};
