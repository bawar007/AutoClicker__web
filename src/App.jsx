import { useContext, useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
import { Alert, AlertTitle } from "@mui/material";
import { motion } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import { AuthContext } from "./context/auth-context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";

function App() {
  const [alertMessage, setAlertMessage] = useState({
    isVisible: false,
    title: "",
    type: "",
    message: "",
  });

  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
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
      <Routes>
        <Route
          path="/"
          element={<MainLayout setAlertMessage={setAlertMessage} />}
        >
          <Route path="/panel" element={<AdminPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
