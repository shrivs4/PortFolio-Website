import { BoxComponent } from "./BoxComponent";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  Paper,
  Stack,
  Chip,
} from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import LanguageIcon from "@mui/icons-material/Language";
import BugReportIcon from "@mui/icons-material/BugReport";
import TuneIcon from "@mui/icons-material/Tune";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

type ServiceItem = {
  name: string;
  icon: React.ReactNode;
};

const SERVICES: ServiceItem[] = [
  { name: "React", icon: <IntegrationInstructionsIcon /> },
  { name: "Website Dev", icon: <LanguageIcon /> },
  { name: "Full Stack", icon: <BuildCircleIcon /> },
  { name: "Bug Fix", icon: <BugReportIcon /> },
  { name: "Optimization", icon: <TuneIcon /> },
  { name: "UI/UX Polish", icon: <DesignServicesIcon /> },
  { name: "Performance Audit", icon: <AssessmentIcon /> },
];

export const Services = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const glassBg = isDark ? "rgba(24,24,27,0.55)" : "rgba(255,255,255,0.7)";

  return (
    <BoxComponent>
      <Card
        sx={{
          width: { xs: "calc(100% - 50px)", md: "82%" },
          minHeight: { xs: "calc(45vh - 80px)", md: 400 },
          borderRadius: 4,
          bgcolor: glassBg,
          backdropFilter: "saturate(180%) blur(10px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          border: "1px solid",
          borderColor: "divider",
          overflow: "hidden",
        }}
        id="services"
      >
        <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4 } }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 2 }}
          >
            <Typography
              component="h1"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                fontSize: "clamp(1.5rem, 1.1rem + 2.2vw, 2.5rem)",
              }}
            >
              Services
            </Typography>
            <Chip
              label="Available for freelance & consulting"
              size="small"
              color="primary"
              variant="outlined"
              sx={{ display: { xs: "none", sm: "inline-flex" } }}
            />
          </Stack>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", sm: "1fr 1fr 1fr" },
              gap: { xs: 1.5, sm: 2, md: 2.5 },
            }}
          >
            {SERVICES.map((s) => (
              <Paper
                key={s.name}
                role="figure"
                aria-label={s.name}
                elevation={0}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                  p: { xs: 1, md: 1.75 },
                  bgcolor: "background.paper",
                  transition: "transform 160ms ease, box-shadow 160ms ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                  },
                  minWidth: { xs: "5%" },
                }}
              >
                <Stack direction="row" spacing={1.25} alignItems="center">
                  <Box
                    sx={{
                      width: { xs: 25, md: 40 },
                      height: { xs: 25, md: 40 },
                      borderRadius: "50%",
                      display: "grid",
                      placeItems: "center",
                      border: "1px solid",
                      borderColor: "divider",
                      bgcolor: isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.03)",
                      flexShrink: 0,
                    }}
                    aria-hidden
                  >
                    {s.icon}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 700, lineHeight: 1.2 }}
                    fontSize={{ xs: "0.9rem", md: "1rem" }}
                  >
                    {s.name}
                  </Typography>
                </Stack>
              </Paper>
            ))}
          </Box>
        </CardContent>
      </Card>
    </BoxComponent>
  );
};
