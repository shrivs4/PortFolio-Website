import { Box } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";

interface HomeProps {
  sectionNumber: number;
}

export const Home = ({ sectionNumber }: HomeProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "calc(100vh - 80px)", // Full viewport height minus navbar height
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        scrollSnapAlign: "start", // For smooth scrolling between sections
      }}
    >
      <Card
        sx={{
          width: { xs: "calc(100% - 50px)", md: "40%" },
          height: { xs: "calc(50vh - 100px)", md: "400px" },
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography variant="h4" textAlign="center">
            Section {sectionNumber}
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
            This is a full-screen section
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          width: { xs: "calc(100% - 50px)", md: "40%" },
          height: { xs: "calc(50vh - 100px)", md: "400px" },
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: { xs: 2, md: 0 },
          ml: { xs: 0, md: 2 },
        }}
      >
        <CardContent>
          <Typography variant="h4" textAlign="center">
            Content {sectionNumber}
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
            Scroll to see next section
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
