import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  browserLocalPersistence,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
import "./LoginPage.scss";
import { auth } from "../../firebaseConfig";
import { NavLink, useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { Box, Button, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const persistence = rememberMe
      ? browserLocalPersistence
      : browserSessionPersistence;
    try {
      await setPersistence(auth, persistence);
      const t = await signInWithPopup(auth, provider);

      await authCtx.authenticate(t.user);
      navigate("/panel", { replace: true });
    } catch (error) {
      console.error("Błąd podczas logowania:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const persistence = rememberMe
        ? browserLocalPersistence
        : browserSessionPersistence;
      await setPersistence(auth, persistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      if (!user.emailVerified) {
        setError("Musisz potwierdzić swój adres e-mail, zanim się zalogujesz.");
        authCtx.logout(); // wyloguj użytkownika
        return;
      }

      // Sukces! Przekieruj do dashboardu lub strony głównej
      await authCtx.authenticate(user);
      navigate("/panel", { replace: true });
    } catch (err) {
      console.error(err);
      switch (err.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          setError("Nieprawidłowy email lub hasło.");
          break;
        case "auth/invalid-email":
          setError("Nieprawidłowy adres e-mail.");
          break;
        case "auth/too-many-requests":
          setError("Zbyt wiele prób logowania. Spróbuj później.");
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

  useEffect(() => {
    if (authCtx.currentUser) {
      if (authCtx.currentUser) {
        navigate("/panel", { replace: true });
      }
    }
  }, [authCtx, navigate]);

  return (
    <div className="background">
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Zaloguj sie z</h2>

          <div className="social-buttons">
            <button className="social-btn google" onClick={handleGoogleLogin}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ display: "block" }}
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
              Google
            </button>
          </div>

          <p className="separator">lub</p>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            <form onSubmit={handleLogin} style={{ width: "100%" }}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "#1976d2" } }}
              />
              <TextField
                label="Hasło"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "#1976d2" } }}
              />
              {error && (
                <Typography color="error" variant="body2" mt={1}>
                  {error}
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
                {loading ? "Logowanie..." : "Zaloguj się"}
              </Button>

              <label
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  margin: "5px 0",
                }}
              >
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  inputProps={{ "aria-label": "controlled" }}
                />
                Zapamiętaj mnie
              </label>
            </form>
          </Box>
          <p className="signup-text">
            Nie posiadasz konta?{" "}
            <NavLink to="/register">Zarejestruj się</NavLink>
          </p>
          <p
            className="signup-text"
            style={{ fontSize: "0.8rem", marginTop: "5px" }}
          >
            Nie pamiętasz hasła?{" "}
            <NavLink to="/resetpassword">Zmień hasło</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
