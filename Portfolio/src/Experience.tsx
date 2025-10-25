import { useRef } from "react";
import { BoxComponent } from "./BoxComponent";
import {
  Card,
  CardContent,
  Divider,
  Typography,
  useTheme,
  Box,
  Chip,
  Stack,
} from "@mui/material";
import { ScrollHint } from "./ScrollHint";

type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  start: string;
  end: string;
  bullets: [string, string]; // exactly 2 bullets
};

const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Turing",
    location: "Remote",
    start: "Feb 2025",
    end: "Present",
    bullets: [
      "Built and shipped React/Next.js features with TypeScript, MUI, and GraphQL to improve DX and delivery speed.",
      "Mentored devs and raised testing standards (Jest), improving release reliability and code quality.",
    ],
  },
  {
    role: "React Lead",
    company: "Synechron",
    location: "Bengaluru",
    start: "Jul 2024",
    end: "Feb 2025",
    bullets: [
      "Led React/Redux builds for a major banking client with TypeScript & MUI; shipped scalable, responsive UIs.",
      "Hardened codebase with component-based architecture and unit tests (Jest) for performance & reliability.",
    ],
  },
  {
    role: "Senior Technical Specialist",
    company: "Coforge",
    location: "Bengaluru",
    start: "Jun 2023",
    end: "Jul 2024",
    bullets: [
      "Led React micro-frontend modules and a reusable component library aligned to the design system.",
      "Optimized performance & accessibility across pages; collaborated in Agile teams to improve UX consistency.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Hexaware Technologies",
    location: "Bengaluru",
    start: "Jul 2022",
    end: "May 2023",
    bullets: [
      "Developed React micro-frontends with TypeScript & Storybook; deployed resilient apps on Azure.",
      "Improved code quality with regular Jest test suites and Agile delivery via Azure Boards.",
    ],
  },
  {
    role: "Senior Analyst",
    company: "Amazon",
    location: "Pune",
    start: "Oct 2019",
    end: "Jun 2022",
    bullets: [
      "Built internal React front-ends for compliance automation as part of a tech-ninja team; hosted on internal infra.",
      "Reduced overdue compliance activities with monitoring, audits, and data-driven reporting.",
    ],
  },
  {
    role: "Senior Associate",
    company: "Tata Consultancy Services",
    location: "Nagpur",
    start: "Feb 2015",
    end: "Jul 2019",
    bullets: [
      "Owned weekly insurance-domain analytics & client health-check presentations; optimized SQL query bugs.",
      "Led a 23-member team; delivered process improvements and earned multiple performance awards.",
    ],
  },
];

export const Experience = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const glassBg = isDark ? "rgba(24,24,27,0.55)" : "rgba(255,255,255,0.7)";
  const listRef = useRef<HTMLDivElement | null>(null);

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
          display: "flex",
          alignItems: "stretch",
        }}
        id="experience"
      >
        <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4 }, width: "100%" }}>
          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: "clamp(1.5rem, 1.1rem + 2.2vw, 2.5rem)",
              mb: 1.5,
            }}
          >
            Experience
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Scrollable list */}
          <Box
            ref={listRef}
            role="list"
            aria-label="work experience"
            sx={{
              maxHeight: { xs: "50vh", md: "56vh" },
              overflowY: "auto",
              pr: 1,
              // nice thin scrollbar
              "&::-webkit-scrollbar": { width: 8 },
              "&::-webkit-scrollbar-thumb": {
                bgcolor: "divider",
                borderRadius: 8,
              },
            }}
          >
            {EXPERIENCE.map((item, i) => (
              <Box
                key={`${item.company}-${item.role}-${i}`}
                role="listitem"
                sx={{ py: 2 }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  justifyContent="space-between"
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  gap={0.5}
                >
                  <Typography
                    component="h2"
                    sx={{
                      fontWeight: 600,
                      fontSize: "clamp(1rem, 0.9rem + 0.6vw, 1.25rem)",
                    }}
                  >
                    {item.role} · {item.company}
                  </Typography>

                  <Stack
                    direction="row"
                    gap={1}
                    alignItems="center"
                    flexShrink={0}
                  >
                    {item.location ? (
                      <Chip
                        label={item.location}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: "divider", bgcolor: "transparent" }}
                      />
                    ) : null}
                    <Chip
                      label={`${item.start} — ${item.end}`}
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: "divider", bgcolor: "transparent" }}
                    />
                  </Stack>
                </Stack>

                <Box
                  component="ul"
                  sx={{
                    pl: 2.5,
                    mt: 1,
                    mb: 0,
                    display: "grid",
                    rowGap: 0.75,
                    "& li": {
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      opacity: 0.95,
                    },
                  }}
                >
                  <Typography component="li" variant="body2">
                    {item.bullets[0]}
                  </Typography>
                  <Typography component="li" variant="body2">
                    {item.bullets[1]}
                  </Typography>
                </Box>

                {i !== EXPERIENCE.length - 1 ? (
                  <Divider sx={{ mt: 2 }} />
                ) : null}
              </Box>
            ))}
          </Box>
        </CardContent>
        <ScrollHint containerRef={listRef} glassBg={glassBg} isDark={isDark} />
      </Card>
    </BoxComponent>
  );
};
