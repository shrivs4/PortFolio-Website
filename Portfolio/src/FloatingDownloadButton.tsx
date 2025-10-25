import { useEffect, useRef, useState } from "react";
import { Box, Fab, Tooltip, useTheme } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

type Pos = { x: number; y: number };

export interface FloatingDownloadButtonProps {
  onClick: () => void;
  tooltip?: string;
  storageKey?: string;
  initialOffset?: { right?: number; bottom?: number };
  zIndex?: number;
  size?: "small" | "medium" | "large";
}

export default function FloatingDownloadButton({
  onClick,
  tooltip = "Download sample file",
  storageKey = "floating-download-pos",
  initialOffset = { right: 16, bottom: 16 },
  zIndex = 2147483000,
  size = "medium",
}: FloatingDownloadButtonProps) {
  const theme = useTheme();
  const btnRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const startRef = useRef<{
    pointerId: number | null;
    startX: number;
    startY: number;
    origin: Pos;
  }>({
    pointerId: null,
    startX: 0,
    startY: 0,
    origin: { x: 0, y: 0 },
  });

  const [pos, setPos] = useState<Pos>(() => {
    // Try restoring from localStorage
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) return JSON.parse(raw) as Pos;
    } catch {}
    return { x: -1, y: -1 };
  });

  const clampToViewport = (p: Pos): Pos => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const btnEl = btnRef.current;
    const w = btnEl?.offsetWidth ?? 56;
    const h = btnEl?.offsetHeight ?? 56;
    const margin = 8;
    const safeTop =
      margin +
      (parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--sat"),
        10
      ) || 0);
    const safeBottom =
      margin +
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--sabb") ||
          "0",
        10
      );
    const safeLeft =
      margin +
      (parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--sal"),
        10
      ) || 0);
    const safeRight =
      margin +
      (parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--sar"),
        10
      ) || 0);

    const minX = safeLeft;
    const maxX = vw - w - safeRight;
    const minY = safeTop;
    const maxY = vh - h - safeBottom;

    return {
      x: Math.min(Math.max(p.x, minX), Math.max(minX, maxX)),
      y: Math.min(Math.max(p.y, minY), Math.max(minY, maxY)),
    };
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--sat", "env(safe-area-inset-top)");
    root.style.setProperty("--sar", "env(safe-area-inset-right)");
    root.style.setProperty("--sal", "env(safe-area-inset-left)");
    root.style.setProperty("--sabb", "env(safe-area-inset-bottom)");

    const place = () => {
      const btnEl = btnRef.current;
      if (!btnEl) return;

      if (pos.x === -1 && pos.y === -1) {
        const w = btnEl.offsetWidth || 56;
        const h = btnEl.offsetHeight || 56;
        const x = window.innerWidth - w - (initialOffset.right ?? 16);
        const y = window.innerHeight - h - (initialOffset.bottom ?? 16);
        const clamped = clampToViewport({ x, y });
        setPos(clamped);
        try {
          localStorage.setItem(storageKey, JSON.stringify(clamped));
        } catch {}
      } else {
        const clamped = clampToViewport(pos);
        if (clamped.x !== pos.x || clamped.y !== pos.y) {
          setPos(clamped);
          try {
            localStorage.setItem(storageKey, JSON.stringify(clamped));
          } catch {}
        }
      }
    };

    place();
    window.addEventListener("resize", place);
    window.addEventListener("orientationchange", place);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("orientationchange", place);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos.x, pos.y]);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    const onPointerDown = (e: PointerEvent) => {
      draggingRef.current = true;
      (e.target as Element).setPointerCapture?.(e.pointerId);
      startRef.current = {
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        origin: { ...pos },
      };
      e.preventDefault();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const dx = e.clientX - startRef.current.startX;
      const dy = e.clientY - startRef.current.startY;
      const next = clampToViewport({
        x: startRef.current.origin.x + dx,
        y: startRef.current.origin.y + dy,
      });
      setPos(next);
    };

    const endDrag = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      try {
        localStorage.setItem(storageKey, JSON.stringify(pos));
      } catch {}
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove, { passive: false });
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos]);

  return (
    <Box
      ref={btnRef}
      sx={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        zIndex,
        touchAction: "none",
        display: { xs: "block", md: "none" },
      }}
    >
      <Tooltip title={tooltip} arrow placement="top">
        <Fab
          color={theme.palette.mode === "dark" ? "default" : "primary"}
          size={size}
          aria-label="download"
          onClick={onClick}
          sx={{
            boxShadow: 3,
            backdropFilter: "saturate(180%) blur(6px)",
          }}
        >
          <DownloadIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
}
