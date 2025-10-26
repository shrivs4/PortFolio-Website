import { useMemo, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Stack,
  useTheme,
  Snackbar,
  Alert,
  Link as MUILink,
  useMediaQuery,
} from "@mui/material";
import { BoxComponent } from "./BoxComponent";
import emailjs from "@emailjs/browser";

const TOPICS = [
  "React",
  "Web Development",
  "Bug Fix",
  "Optimization",
  "UI/UX Polish",
  "Performance Audit",
  "Other",
];

export const ContactMe = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const glassBg = isDark ? "rgba(24,24,27,0.55)" : "rgba(255,255,255,0.7)";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [fromEmail, setFromEmail] = useState("");
  const [topic, setTopic] = useState<string>("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    open: boolean;
    type: "success" | "error";
    text: string;
  }>({
    open: false,
    type: "success",
    text: "",
  });

  const isValidEmail = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail.trim()),
    [fromEmail]
  );
  const canSend =
    isValidEmail && topic && message.trim().length > 0 && !loading;

  const handleSend = async () => {
    if (!canSend) {
      setToast({
        open: true,
        type: "error",
        text: "Please fill email, topic, and message.",
      });
      return;
    }
    try {
      setLoading(true);
      const SERVICE_ID = "service_38uk8rs";
      const TEMPLATE_ID = "template_ok2qklp";
      const PUBLIC_KEY = "n6j_gDSjLQJfuuhaq";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_email: fromEmail,
          topic,
          message,
          to_name: "Shriyam Shrivastava",
          to_email: "shrivastavashriyam2@gmail.com",
        },
        { publicKey: PUBLIC_KEY }
      );

      setToast({
        open: true,
        type: "success",
        text: "Thanks! Your message was sent.",
      });
      setFromEmail("");
      setTopic("");
      setMessage("");
    } catch (e) {
      setToast({
        open: true,
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <BoxComponent>
      <Box
        id="contact"
        sx={{
          width: { xs: "calc(100% - 50px)", md: "82%" },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.6fr 1fr" },
          gap: { xs: 2, md: 3 },
          alignItems: "stretch",
          marginTop: { xs: 4, md: 0 },
        }}
      >
        <Card
          sx={{
            borderRadius: 4,
            bgcolor: glassBg,
            backdropFilter: "saturate(180%) blur(10px)",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            overflow: "hidden",
            maxWidth: "100%",
          }}
        >
          <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            {!isMobile && (
              <Typography
                component="h1"
                sx={{
                  fontWeight: 800,
                  letterSpacing: 0.2,
                  fontSize: "clamp(1.25rem, 1.1rem + 2vw, 2rem)",
                  mb: { xs: 0.5, md: 1 },
                }}
              >
                Say Hi 👋
              </Typography>
            )}
            <Typography
              variant="body2"
              sx={{ opacity: 0.8, mb: { xs: 1, md: 2 } }}
            >
              Tell me a bit about what you need—I'll get back quickly.
            </Typography>

            <Stack spacing={1.5}>
              <TextField
                size="small"
                label="Your Email"
                type="email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                error={fromEmail.length > 0 && !isValidEmail}
                helperText={
                  fromEmail.length > 0 && !isValidEmail
                    ? "Enter a valid email"
                    : " "
                }
                fullWidth
              />

              <FormControl size="small" fullWidth>
                <InputLabel id="topic-label">Topic</InputLabel>
                <Select
                  labelId="topic-label"
                  label="Topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value as string)}
                >
                  {TOPICS.map((t) => (
                    <MenuItem key={t} value={t}>
                      {t}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                size="small"
                label="Your Message"
                value={message}
                placeholder={isMobile ? "Say Hi 👋" : ""}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                minRows={isMobile ? 2 : 5}
                maxRows={isMobile ? 5 : 10}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  onClick={handleSend}
                  disabled={!canSend}
                  size="small"
                >
                  {loading ? "Sending…" : "Send Email"}
                </Button>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        <Card
          sx={{
            borderRadius: 4,
            bgcolor: glassBg,
            backdropFilter: "saturate(180%) blur(10px)",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            overflow: "hidden",
            maxWidth: "100%",
          }}
        >
          <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: "clamp(1.05rem, 0.9rem + 1vw, 1.35rem)",
                mb: 1,
              }}
            >
              My Contact Info:
            </Typography>

            <Stack
              spacing={1.25}
              sx={{ opacity: 0.95, wordBreak: "break-word" }}
            >
              <Typography variant="body2">
                <strong>Name:</strong> Shriyam Shrivastava
              </Typography>
              <Typography variant="body2">
                <strong>LinkedIn:</strong>{" "}
                <MUILink
                  href="https://linkedin.com/in/shriyam-shrivastava-6ab0a9172"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/shriyam-shrivastava-6ab0a9172
                </MUILink>
              </Typography>
              <Typography variant="body2">
                <strong>Email:</strong>{" "}
                <MUILink href="mailto:shrivastavashriyam2@gmail.com">
                  shrivastavashriyam2@gmail.com
                </MUILink>
              </Typography>
              <Typography variant="body2">
                <strong>WhatsApp:</strong>{" "}
                <MUILink
                  href="https://wa.me/919595029796"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91-9595029796
                </MUILink>
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>

      <Snackbar
        open={toast.open}
        autoHideDuration={2800}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToast((t) => ({ ...t, open: false }))}
          severity={toast.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {toast.text}
        </Alert>
      </Snackbar>
    </BoxComponent>
  );
};
