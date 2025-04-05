import { useContext, useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes, Navigate } from "react-router";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { motion } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import { AuthContext } from "./context/auth-context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import HomePage from "./pages/HomePage/HomePage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import Regulamin from "./pages/Regulamin/Regulamin";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci/PolitykaPrywatnosci";
import DashboardRedirect from "./pages/DashboardRedirect/DashboardRedirect";
import CancelPage from "./pages/CancelPage/CancelPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import FaqPage from "./pages/FaqPage/FaqPage";
import RegisterForm from "./pages/RegisterPage/RegisterPage";
import ResetPasswordForm from "./pages/ResetPasswordPage/ResetPasswordForm";

function App() {
  const [alertMessage, setAlertMessage] = useState({
    isVisible: false,
    title: "",
    type: "",
    message: "",
  });

  const [snackMessage, setSnackMessage] = useState({
    isVisible: false,
    title: "",
    type: "",
    message: "",
  });

  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser !== null) {
        if (currentUser.emailVerified) {
          const t = await authCtx.authenticate(currentUser);
          if (t) {
            setAlertMessage({
              isVisible: true,
              title: "",
              type: "success",
              message: "Zalogowano !!",
            });
          }
        } else {
          setAlertMessage({
            isVisible: true,
            title: "",
            type: "warning",
            message: "Zweryfikuj swój email !!",
          });
          authCtx.logout();
        }
      } else {
        authCtx.logout();
      }
    });

    return () => unsubscribe();
  }, [authCtx]);

  useEffect(() => {
    if (alertMessage.isVisible) {
      const timer = setTimeout(() => {
        setAlertMessage({
          isVisible: false,
          title: "",
          type: "",
          message: "",
        });
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [alertMessage, setAlertMessage]);

  return (
    <div className="main">
      {alertMessage.isVisible && (
        <motion.div
          style={{ position: "absolute", top: "5%", zIndex: 101 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Alert
            variant="filled"
            severity={alertMessage.type}
            autoCapitalize="characters"
            onClose={() => {
              setAlertMessage({
                isVisible: false,
                title: "",
                type: "",
                message: "",
              });
            }}
          >
            {alertMessage.title.length ? (
              <AlertTitle>{alertMessage.title}</AlertTitle>
            ) : null}
            {alertMessage.message}
          </Alert>
        </motion.div>
      )}
      <Snackbar
        open={snackMessage.isVisible}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        sx={{ minWidth: "250px" }}
        key="snack--message"
        onClose={() => {
          setSnackMessage({
            isVisible: false,
            title: "",
            type: "",
            message: "",
          });
        }}
      >
        <Alert
          onClose={() => {
            setSnackMessage({
              isVisible: false,
              title: "",
              type: "",
              message: "",
            });
          }}
          severity={snackMessage.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackMessage.title.length ? (
            <AlertTitle>{snackMessage.title}</AlertTitle>
          ) : null}
          {snackMessage.message}
        </Alert>
      </Snackbar>
      <Routes>
        <Route
          path="/"
          element={<MainLayout setAlertMessage={setAlertMessage} />}
        >
          <Route path="/" element={<HomePage />} />
          <Route
            path="/panel"
            element={
              <AdminPage
                showMessage={setAlertMessage}
                setSnackMessage={setSnackMessage}
              />
            }
          />
          <Route path="/regulamin" element={<Regulamin />} />
          <Route path="/policy" element={<PolitykaPrywatnosci />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cancel" element={<CancelPage />} />
          <Route path="/dashboard" element={<DashboardRedirect />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>

        <Route
          path="/login"
          element={<LoginPage setMessage={setAlertMessage} />}
        />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/resetpassword" element={<ResetPasswordForm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
