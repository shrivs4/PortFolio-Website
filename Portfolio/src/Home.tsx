import { Box, Button, Tooltip } from "@mui/material";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import {
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiSass,
  SiNextdotjs,
  SiPython,
} from "react-icons/si";
import { useEffect } from "react";
import resumePdf from "./assets/SHRIYAM_SHRIVASTAVA_Resume.pdf";
import { BoxComponent } from "./BoxComponent";

export const Home = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const glassBg = isDark ? "rgba(24,24,27,0.55)" : "rgba(255,255,255,0.7)";

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const timer = setTimeout(() => {
        window.scrollTo({
          top: 50,
          behavior: "smooth",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  const TECH = [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Next.js", Icon: SiNextdotjs, color: theme.palette.text.primary },
    { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { name: "Sass", Icon: SiSass, color: "#CC6699" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
  ];

  return (
    <BoxComponent>
      <Card
        sx={{
          width: { xs: "calc(100% - 50px)", md: "40%" },
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
        id="home"
      >
        <CardContent
          sx={{
            p: { xs: 2.5, sm: 3, md: 4 },
            width: "100%",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: "clamp(1.5rem, 1.1rem + 2.2vw, 2.5rem)",
            }}
          >
            <Box component="span" sx={{ fontWeight: 700 }}>
              Shriyam Shrivastava
            </Box>
            <Box
              component="span"
              sx={{ fontWeight: 600, color: "text.secondary" }}
            >
              {" — Designing fast, accessible web experiences."}
            </Box>
          </Typography>
          <Divider sx={{ my: { xs: 1.5, sm: 2 }, opacity: 0.7 }} />

          <Box
            sx={{
              borderLeft: "3px solid",
              borderColor: "divider",
              pl: { xs: 1.5, sm: 2 },
            }}
          >
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.6,
                fontSize: "clamp(0.95rem, 0.85rem + 0.4vw, 1.125rem)",
                mb: 1,
              }}
            >
              I build interfaces with React/Next.js, TypeScript, and MUI.
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.6,
                fontSize: "clamp(0.95rem, 0.85rem + 0.4vw, 1.125rem)",
                mb: 1,
              }}
            >
              I have 6+ years crafting responsive, accessible products.
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.6,
                fontSize: "clamp(0.95rem, 0.85rem + 0.4vw, 1.125rem)",
                mb: 1,
              }}
            >
              I like clean design systems, performance, and DX.
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.6,
                fontSize: "clamp(0.95rem, 0.85rem + 0.4vw, 1.125rem)",
              }}
            >
              Overall, I'm a software engineer who loves to build web
              applications.
            </Typography>
          </Box>
        </CardContent>
      </Card>
      <Box
        sx={{
          width: { xs: "calc(100% - 50px)", md: "40%" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: { xs: "calc(22vh - 100px)", md: 400 },
          mt: { xs: 2, md: 0 },
          ml: { xs: 0, md: 2 },
        }}
      >
        <Card
          sx={{
            height: { xs: "calc(22vh - 100px)", md: 220 },
            backgroundColor: "rgba(0, 0, 0, 0.06)",
            borderRadius: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "1px solid",
            borderColor: "divider",
            display: "flex",
            alignItems: "stretch",
            backdropFilter: "saturate(160%) blur(8px)",
          }}
        >
          <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 3 }, width: "100%" }}>
            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                letterSpacing: 0.2,
                fontSize: "clamp(1.1rem, 0.9rem + 1vw, 1.4rem)",
                mb: { xs: 1, md: 1 },
                display: { xs: "none", md: "block" },
              }}
            >
              Languages I Work With...
            </Typography>

            <Divider
              sx={{
                mb: { xs: 1, md: 1.25 },
                display: { xs: "none", md: "block" },
              }}
            />
            <Box
              component="section"
              aria-label="Technologies"
              sx={{
                display: "flex",
                flexWrap: { xs: "nowrap", sm: "wrap" },
                justifyContent: { xs: "space-between", sm: "flex-start" },
                gap: { xs: 1, sm: 1.5 },
                width: "100%",
                overflowX: { xs: "auto", sm: "visible" },
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {TECH.map(({ name, Icon, color }) => (
                <Tooltip key={name} title={name} arrow>
                  <Box
                    role="img"
                    aria-label={name}
                    sx={{
                      width: { xs: 36, sm: "clamp(48px, 7vw, 64px)" },
                      height: { xs: 36, sm: "clamp(48px, 7vw, 64px)" },
                      borderRadius: 2,
                      display: "grid",
                      placeItems: "center",
                      bgcolor: isDark
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.04)",
                      border: "1px solid",
                      borderColor: "divider",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                      transition: "transform 140ms ease",
                      "@media (hover: hover) and (pointer: fine)": {
                        "&:hover": { transform: "translateY(-2px)" },
                      },
                      "&:active": { transform: "scale(0.98)" },
                      "& svg": {
                        width: { xs: 16, sm: "clamp(20px, 2vw, 28px)" },
                        height: { xs: 16, sm: "clamp(20px, 2vw, 28px)" },
                        color,
                      },
                    }}
                  >
                    <Icon />
                  </Box>
                </Tooltip>
              ))}
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            height: { xs: "calc(22vh - 100px)", md: 100 },
            marginTop: "10px",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            p: 3,
            borderRadius: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "1px solid",
            borderColor: "divider",
            bgcolor: glassBg,
            backdropFilter: "saturate(180%) blur(10px)",
          }}
        >
          <Box>
            <Typography
              component="h3"
              sx={{
                fontWeight: 700,
                fontSize: "clamp(1rem, 0.6rem + 0.8vw, 1.25rem)",
              }}
            >
              Download Résumé
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 0.5 }}>
              PDF • last updated recently
            </Typography>
          </Box>

          <Button
            component="a"
            href={resumePdf}
            download
            variant="contained"
            sx={{
              borderRadius: 2,
              px: 2.5,
              py: 1,
              fontWeight: 600,
              backgroundColor: "#1e1e1e",
              color: "white",
              "&:hover": {
                backgroundColor: "black",
                opacity: 0.7,
                color: "white",
                transform: "scale(1.05)",
              },
            }}
          >
            Download
          </Button>
        </Card>
      </Box>
    </BoxComponent>
  );
};
