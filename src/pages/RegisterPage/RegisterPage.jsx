import React, { useState } from "react";
import {
  TextField,
  Button,
  Avatar,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../../firebaseConfig";

const defaultAvatar =
  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Sprawdź, czy email już istnieje
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        setError("Użytkownik z tym adresem e-mail już istnieje.");
        setTimeout(() => navigate("/login", { replace: true }), 2000);
        return;
      }

      // Rejestracja
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Ustaw profil
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: defaultAvatar,
      });

      // Wyślij link weryfikacyjny
      await sendEmailVerification(userCredential.user);

      // Przekierowanie
      navigate("/login");
    } catch (err) {
      console.error(err);
      // Mapowanie kodów błędów Firebase
      switch (err.code) {
        case "auth/email-already-in-use":
          setError(
            "Użytkownik z tym adresem e-mail już istnieje. Możesz się zalogować."
          );
          setTimeout(() => navigate("/login", { replace: true }), 2000);
          break;
        case "auth/invalid-email":
          setError("Nieprawidłowy adres e-mail.");
          break;
        case "auth/weak-password":
          setError("Hasło powinno mieć co najmniej 6 znaków.");
          break;
        case "auth/network-request-failed":
          setError("Błąd sieci. Sprawdź połączenie internetowe.");
          break;
        default:
          setError("Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEmail("");
    setName("");
    setPassword("");
    setError("");
    setLoading(false);
    navigate("/login", { replace: true });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper sx={{ p: 4, mt: 6 }}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Avatar src={defaultAvatar} sx={{ width: 80, height: 80 }} />
          <Typography variant="h5">Rejestracja</Typography>
          <form onSubmit={handleRegister} style={{ width: "100%" }}>
            <TextField
              label="Nazwa"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Hasło"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && (
              <Typography color="error" variant="body2" mt={1}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, width: "50%", marginLeft: "25%" }}
              disabled={loading}
            >
              {loading ? "Rejestracja..." : "Zarejestruj się"}
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
