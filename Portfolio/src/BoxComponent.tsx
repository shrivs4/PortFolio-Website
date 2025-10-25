import { Box } from "@mui/material";

export const BoxComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 2, md: 2 },
        scrollSnapAlign: "start",
        scrollBehavior: "smooth",
      }}
    >
      {children}
    </Box>
  );
};
