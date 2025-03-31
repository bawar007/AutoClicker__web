import { useContext, useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { motion } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import { AuthContext } from "./context/auth-context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import SuccessPage from "./pages/SuccessPage";
import Regulamin from "./pages/Regulamin";
import PolitykaPrywatnosci from "./pages/PolitykaPrywatnosci/PolitykaPrywatnosci";

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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null || authCtx.currentUser === null) {
        authCtx.authenticate(currentUser);
        setAlertMessage({
          isVisible: true,
          title: "",
          type: "success",
          message: "Zalogowano !!",
        });
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
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/success" element={<SuccessPage />} />

        {/* <Route path="/cancel" element={<CancelPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
