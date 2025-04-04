import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const authCtx = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        from_email: email,
        message: message,
      };

      await emailjs.send(
        "service_r1huwpl", // <- ZASTĄP
        "template_eownmzr", // <- ZASTĄP
        templateParams,
        "VaMrGtN-ZB8zOAtuy" // <- ZASTĄP
      );

      alert("Wiadomość została wysłana!");
      setMessage("");
    } catch (error) {
      console.error("Błąd przy wysyłaniu wiadomości:", error);
      alert("Wystąpił błąd. Spróbuj ponownie później.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authCtx.currentUser) {
      setEmail(authCtx.currentUser.email);
    }
  }, [authCtx]);

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Skontaktuj się z nami
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <TextField
          label="Twój e-mail"
          fullWidth
          margin="normal"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "#1976d2" } }}
        />

        <TextField
          label="Wiadomość"
          fullWidth
          margin="normal"
          required
          multiline
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "#1976d2" } }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
        </Button>
      </Box>
    </Container>
  );
}
