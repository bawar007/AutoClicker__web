import { useContext, useEffect, useState } from "react";
import { deleteToken, saveToken } from "../utils/http";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router";
import { OrbitProgress } from "react-loading-indicators";
import SaveIcon from "@mui/icons-material/Save";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Collapse, Snackbar, Alert, AlertTitle } from "@mui/material";

import "./AdminPage.scss";
import UserDashboard from "./UserDashboard/UserDashboard";
import { EventAvailable, Token } from "@mui/icons-material";

const AdminPage = ({ setSnackMessage }) => {
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState("");
  const [tokenLoading, setTokenLoading] = useState(false);
  const [token2Loading, setToken2Loading] = useState(false);
  const [token2, setToken2] = useState("");
  const [userTokens, setUserTokens] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSub, setIsSub] = useState(false);
  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    description: "",
    callAccept: () => {},
  });

  const navigate = useNavigate();

  const handleClickOpenDeleteToken = (token) => {
    setDialog((prev) => ({
      ...prev,
      open: true,
      title: "Dodaj token",
      description: "Czy na pewno chcesz usunąć token?",
      callAccept: () => {
        handleDeleteToken(token);
        handleClose();
      },
    }));
  };

  const handleAddToken = async (index) => {
    const tokenM = index === 0 ? token : token2;
    const type = authCtx.currentUserInfo.userInfo;
    if (index === 0) setTokenLoading(true);
    if (index === 1) setToken2Loading(true);
    if (tokenM) {
      const t = await saveToken(
        tokenM,
        authCtx.currentUser.uid,
        type.subscription.type
      );
      if (t === true) {
        setSnackMessage({
          isVisible: true,
          title: "TOKEN",
          type: "success",
          message: "Token zapisany prawidłowo",
        });
        setUserTokens((prev) => [
          ...prev,
          { token: tokenM, dateCreate: new Date().toISOString() },
        ]);
        setToken("");
        setToken2("");
      } else {
        setSnackMessage({
          isVisible: true,
          title: "TOKEN",
          type: "error",
          message: t.error,
        });
      }
    } else {
      setSnackMessage({
        isVisible: true,
        title: "TOKEN",
        type: "error",
        message: "Musisz podać token",
      });
    }
    setToken2Loading(false);
    setTokenLoading(false);
  };

  const handleDeleteToken = async (token) => {
    const t = await deleteToken(token, authCtx.currentUser.uid);
    localStorage.setItem("items", "test");
    if (t === true) {
      const newTokens = userTokens.filter((item) => item.token !== token);
      setUserTokens(newTokens);
      setSnackMessage({
        isVisible: true,
        title: "TOKEN",
        type: "success",
        message: "Token usunięty",
      });
    } else {
      setSnackMessage({
        isVisible: true,
        title: "TOKEN",
        type: "error",
        message: t.error,
      });
    }
  };

  const handleClose = () => {
    setDialog((prev) => ({
      ...prev,
      open: false,
      title: "",
      description: "",
      callAccept: () => {},
    }));
  };

  useEffect(() => {
    if (authCtx.currentUser === false) {
      navigate("/login", { replace: true });
    }
  }, [authCtx.currentUser, navigate]);

  useEffect(() => {
    const helper = async () => {
      const tokens = authCtx.currentUserInfo.userTokens;
      if (tokens) setUserTokens(tokens);
    };

    const helperUser = async () => {
      const t = authCtx.currentUserInfo.userInfo;
      if (t.subscription && t.subscription.status === "active") {
        setIsSub(true);
      } else setIsSub(false);

      setIsLoading(false);
    };

    if (authCtx.currentUserInfo) {
      helper();
      helperUser();
    }
  }, [authCtx.currentUserInfo]);

  if (isLoading) return <OrbitProgress size="small" variant="split-disc" />;

  return (
    <div className="admin--page">
      <UserDashboard
        setIsSub={setIsSub}
        setUserTokens={setUserTokens}
        setSnackMessage={setSnackMessage}
      />
      {isSub ? (
        <div className="admin--panel">
          <div className="tokens--wrapper">
            <p>tokeny {userTokens.length}/2</p>

            {["", ""].map((item, index) => (
              <div className="tokens--wrapper__item" key={`item-${index}`}>
                {userTokens[index] ? (
                  <div className="tokens--wrapper__item__cos">
                    <div className="center">
                      <div className="date">
                        <EventAvailable />
                        <span>
                          {new Date(
                            userTokens[index].dateCreate
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="tokenID">
                        <Token />
                        <span>{userTokens[index].token}</span>
                        <span className="hovered left--color">ID pluginu</span>
                      </div>
                    </div>
                    <div className="btn__wrapper ">
                      <Button
                        size="medium"
                        color="warning"
                        onClick={() =>
                          handleClickOpenDeleteToken(userTokens[index].token)
                        }
                        loadingPosition="start"
                        startIcon={<DeleteIcon />}
                        variant="contained"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div
                    key={`item-${index}`}
                    className="tokens--wrapper__item__cos"
                  >
                    <div className="center">
                      <Token />
                      <input
                        type="text"
                        onChange={(v) => {
                          if (index === 0) setToken(v.target.value);
                          else setToken2(v.target.value);
                        }}
                        value={index === 0 ? token : token2}
                      />
                    </div>

                    <div className="btn__wrapper ">
                      <Button
                        size="medium"
                        color="success"
                        onClick={() => {
                          handleAddToken(index);
                        }}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        loading={index === 0 ? tokenLoading : token2Loading}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <Dialog
        open={dialog.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialog.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialog.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialog.callAccept}>TAK</Button>
          <Button onClick={handleClose} autoFocus>
            NIE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminPage;
