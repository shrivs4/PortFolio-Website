// components/ScrollHint.tsx
import { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { motion } from "framer-motion";

export interface ScrollHintProps {
  containerRef: React.RefObject<HTMLElement>;
  glassBg?: string;
  isDark?: boolean;
  threshold?: number;
  label?: string; // kept for backwards-compat, but unused now
}

export const ScrollHint = ({
  containerRef,
  glassBg,
  isDark,
  threshold = 8,
}: ScrollHintProps) => {
  const theme = useTheme();
  const dark = isDark ?? theme.palette.mode === "dark";
  const bg =
    glassBg ?? (dark ? "rgba(24,24,27,0.55)" : "rgba(255,255,255,0.7)");

  const [showHint, setShowHint] = useState(true);

  const checkScrollState = () => {
    const el = containerRef.current;
    if (!el) return;
    const atBottom =
      el.scrollHeight - el.scrollTop - el.clientHeight <= threshold;
    setShowHint(!atBottom);
  };

  useEffect(() => {
    checkScrollState();
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => checkScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(checkScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current]);

  const scrollALittle = () => {
    containerRef.current?.scrollBy({ top: 200, behavior: "smooth" });
  };

  if (!showHint) return null;

  return (
    <>
      {/* Bottom gradient */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 56,
          background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${
            dark ? "rgba(24,24,27,0.35)" : "rgba(255,255,255,0.65)"
          } 80%)`,
          pointerEvents: "none",
        }}
      />

      {/* Centered animated down-arrow button */}
      <Box
        component={motion.button}
        onClick={scrollALittle}
        aria-label="Scroll to see more"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          left: "44%",
          bottom: { xs: 10, sm: 12, md: 14 },
          transform: "translateX(-50%)",
          bgcolor: "transparent",
          color: "black",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          cursor: "pointer",
        }}
      >
        <KeyboardDoubleArrowDownIcon fontSize="medium" />
      </Box>
    </>
  );
};
