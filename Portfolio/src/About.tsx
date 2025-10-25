import { BoxComponent } from "./BoxComponent";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import { ScrollHint } from "./ScrollHint";
import { useRef } from "react";

export const About = () => {
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
        id="about"
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
            Front-End Engineer (8+ yrs) • React, Next.js & TypeScript
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              fontSize: { xs: "0.97rem", md: "1.02rem" },
              mb: 2,
            }}
          >
            I build modular, high-performance web apps with modern React/Next.js
            and TypeScript—shaping micro-frontend architectures, scalable
            component libraries, and fast, accessible UIs. I care about clean
            code, strong testing habits, and mentoring teams to ship reliably.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box
            ref={listRef}
            component="ul"
            sx={{
              pl: 2.5,
              m: 0,
              display: "grid",
              rowGap: 1,
              columnGap: 2,
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              "& li": {
                marginLeft: { xs: "0.5em", md: "1em" },
              },
              height: { xs: "calc(45vh - 180px)", md: "auto" },
              overflowY: { xs: "scroll", md: "visible" },
            }}
            id="about"
          >
            <Typography component="li" variant="body2">
              5+ years focused on React; strong with Next.js, TypeScript,
              GraphQL, MUI, Storybook
            </Typography>
            <Typography component="li" variant="body2">
              Led micro-frontends & design systems for reuse and consistency
              across teams
            </Typography>
            <Typography component="li" variant="body2">
              CI-friendly tests (Jest) with high coverage and predictable
              releases
            </Typography>
            <Typography component="li" variant="body2">
              Performance & accessibility champion; measurable UX improvements
            </Typography>
            <Typography component="li" variant="body2">
              Cross-functional collaborator: reviews, mentorship, Agile delivery
            </Typography>
            <Typography component="li" variant="body2">
              Experience across fintech/banking & enterprise-scale apps
            </Typography>
          </Box>
        </CardContent>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <ScrollHint
            containerRef={listRef}
            glassBg={glassBg}
            isDark={isDark}
          />
        </Box>
      </Card>
    </BoxComponent>
  );
};
