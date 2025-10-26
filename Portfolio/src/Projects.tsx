import { useRef, useState } from "react";
import { BoxComponent } from "./BoxComponent";
import {
  Card,
  CardContent,
  Typography,
  useTheme,
  Box,
  Stack,
  Button,
  Link as MUILink,
  IconButton,
  Chip,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ScrollHint } from "./ScrollHint";
import Trippy1 from "./assets/projectAsset/Trippy1.jpeg";
import Trippy2 from "./assets/projectAsset/Trippy2.jpeg";
import Trippy3 from "./assets/projectAsset/Trippy3.jpeg";
import TripEx from "./assets/projectAsset/TripEx.png";
import formTwo from "./assets/projectAsset/form4.png";
import game1 from "./assets/projectAsset/game1.jpeg";

type ProjectItem = {
  title: string;
  blurb: string;
  url?: string;
  images: string[];
  tags?: string[];
};

const PROJECTS: ProjectItem[] = [
  {
    title: "Social Travel Vlog Platform (Prototype)",
    blurb:
      "Story-led travel vlogs where creators inspire trips; designed for brands (MakeMyTrip, Goibibo, Booking.com) to host communities, boost engagement/retention, and drive traffic via content→service funnels.",
    url: "https://trippytoe.netlify.app/",
    images: [Trippy1, Trippy2, Trippy3],
    tags: ["Prototype", "React", "Social", "TravelTech"],
  },
  {
    title: "TripEx – Group Expense & Chat (Prototype)",
    blurb:
      "MERN app for trip groups: create rooms, share room links/passkeys, in-room chat, and real-time expense totals. Vision: a WhatsApp-style group type with Payments for seamless settle-ups. Demo: ID 1e41f820-4e77-4ad5-ab95-da8124091f0f, pass jpk9jq.",
    url: "https://trip-ex.netlify.app/join",
    images: [TripEx],
    tags: ["MERN", "Realtime", "Chat", "Expense Tracker", "Prototype"],
  },
  {
    title: "Custom Form Creator (Prototype)",
    blurb:
      "React + MUI prototype for building custom forms—add input fields, print, or link with APIs to store responses. Envisioned as a modern, more flexible version of Microsoft Forms for personalized data capture and integration.",
    url: "https://custom-form-creator.netlify.app/",
    images: [formTwo],
    tags: ["ReactJS", "Material-UI", "Form Builder", "Prototype"],
  },
  {
    title: "90s Cartoons Quiz (Millionaire-style)",
    blurb:
      "Browser quiz inspired by 'Who Wants to Be a Millionaire'—90s cartoons trivia with progressive difficulty, lifeline-like hints, and score tracking.",
    url: "https://subtle-heliotrope-110300.netlify.app/",
    images: [game1],
    tags: ["Quiz", "Game", "Trivia", "Prototype"],
  },
];

function ProjectCard({ item }: { item: ProjectItem }) {
  const [idx, setIdx] = useState(0);
  const total = item.images.length;
  const canPrev = total > 1 && idx > 0;
  const canNext = total > 1 && idx < total - 1;

  const prev = () => setIdx((i) => (i > 0 ? i - 1 : i));
  const next = () => setIdx((i) => (i < total - 1 ? i + 1 : i));

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: "background.paper",
      }}
      role="group"
      aria-label={`${item.title} project`}
    >
      <Box
        sx={{
          position: "relative",
          maxHeight: { xs: 120, md: 200 },
          bgcolor: "action.hover",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={item.images[idx]}
          alt={`${item.title} screenshot ${idx + 1}`}
          loading="lazy"
          decoding="async"
          key={idx}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "opacity 0.4s ease-in-out, transform 0.4s ease-in-out",
          }}
        />
        {total > 1 && (
          <>
            <IconButton
              onClick={prev}
              disabled={!canPrev}
              aria-label="Previous screenshot"
              size="small"
              sx={{
                position: "absolute",
                top: "50%",
                left: 6,
                transform: "translateY(-50%)",
                bgcolor: "rgba(0,0,0,0.35)",
                color: "white",
                "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={next}
              disabled={!canNext}
              aria-label="Next screenshot"
              size="small"
              sx={{
                position: "absolute",
                top: "50%",
                right: 6,
                transform: "translateY(-50%)",
                bgcolor: "rgba(0,0,0,0.35)",
                color: "white",
                "&:hover": { bgcolor: "rgba(0,0,0,0.5)" },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </>
        )}
      </Box>

      <Box sx={{ p: 1.5 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          gap={1}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, lineHeight: 1.2 }}
          >
            {item.title}
          </Typography>
          {item.url && (
            <Button
              size="small"
              variant="outlined"
              endIcon={<OpenInNewIcon />}
              component={MUILink}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textWrap: "nowrap", px: 1.25 }}
            >
              Live
            </Button>
          )}
        </Stack>

        <Typography variant="body2" sx={{ mt: 1, opacity: 0.95 }}>
          {item.blurb}
        </Typography>

        {item.tags?.length ? (
          <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mt: 1 }}>
            {item.tags.map((t) => (
              <Chip key={t} size="small" label={t} variant="outlined" />
            ))}
          </Stack>
        ) : null}
      </Box>
    </Box>
  );
}

export const Projects = () => {
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
          position: "relative",
          overflow: "hidden",
        }}
        id="projects"
      >
        <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4 } }}>
          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: "clamp(1.5rem, 1.1rem + 2.2vw, 2.5rem)",
              mb: 1,
            }}
          >
            Projects
          </Typography>

          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              mb: 2,
              fontSize: { xs: "0.97rem", md: "1.02rem" },
            }}
          >
            Apart from the projects I build at work, here are a few personal
            projects I explore in my leisure time to bring ideas to life.
          </Typography>

          <Box
            ref={listRef}
            sx={{
              maxHeight: { xs: "50vh", md: "56vh" },
              overflowY: "auto",
              pr: 1,
              "&::-webkit-scrollbar": { width: 8 },
              "&::-webkit-scrollbar-thumb": {
                bgcolor: "divider",
                borderRadius: 8,
              },

              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {PROJECTS.map((p) => (
              <ProjectCard key={p.title} item={p} />
            ))}
          </Box>
        </CardContent>
        <ScrollHint containerRef={listRef} glassBg={glassBg} isDark={isDark} />
      </Card>
    </BoxComponent>
  );
};
