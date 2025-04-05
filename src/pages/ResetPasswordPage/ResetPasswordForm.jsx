import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [startCountdown, setStartCountdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (startCountdown) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            navigate("/login");
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startCountdown, navigate]);

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    setCountdown(5);
    setStartCountdown(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Wysłano wiadomość z linkiem do zresetowania hasła.");
      setStartCountdown(true);
    } catch (err) {
      console.error(err);
      switch (err.code) {
        case "auth/user-not-found":
          setError("Nie znaleziono użytkownika z tym adresem e-mail.");
          break;
        case "auth/invalid-email":
          setError("Nieprawidłowy adres e-mail.");
          break;
        case "auth/network-request-failed":
          setError("Błąd sieci. Sprawdź połączenie internetowe.");
          break;
        default:
          setError("Wystąpił nieoczekiwany błąd. Spróbuj ponownie.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEmail("");
    setError("");
    setLoading(false);
    navigate("/login", { replace: true });
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Typography variant="h5">Resetuj hasło</Typography>
          <form onSubmit={handleReset} style={{ width: "100%" }}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && (
              <Typography color="error" variant="body2" mt={1}>
                {error}
              </Typography>
            )}
            {message && (
              <Typography color="primary" variant="body2" mt={1}>
                {message}
                <br />
                Za {countdown} sekund nastąpi przekierowanie do logowania...
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              disabled={loading}
            >
              {loading ? "Wysyłanie..." : "Wyślij link resetujący"}
            </Button>
          </form>
          <Button
            variant="contained"
            color="info"
            sx={{ mt: 1, width: "50%" }}
            onClick={handleCancel}
          >
            ANULUJ
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
