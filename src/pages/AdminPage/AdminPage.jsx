import { useContext, useEffect, useState } from "react";
import { deleteToken } from "../../utils/http";
import { AuthContext } from "../../context/auth-context";
import { useNavigate } from "react-router";
import { OrbitProgress } from "react-loading-indicators";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import "./AdminPage.scss";
import UserDashboard from "../UserDashboard/UserDashboard";
import { EventAvailable, Token, TokenOutlined } from "@mui/icons-material";
import Subscription from "../../components/Subscription/Subscriptions";
import AddToken from "../../components/AddToken";

const premiumTypes = {
  BUSSINESS_GOLD: "BUSINESS GOLD",
  GOLD: "GOLD",
  BASIC: "BASIC",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const AdminPage = ({ setSnackMessage }) => {
  const authCtx = useContext(AuthContext);

  const [userTokens, setUserTokens] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSub, setIsSub] = useState(false);
  const [tokensTableMap, setTokensTableMap] = useState([""]);
  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    description: "",
    callAccept: () => {},
  });
  const [openModal, setOpenModal] = useState(true);

  const handleCloseModal = () => {
    setOpenModal(false);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // opcjonalnie: płynne przewijanie
    });
  };

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

      if (t.subscription) {
        const userHaveSub =
          t.subscription.status === "active" ||
          authCtx.currentUserInfo.userInfo.subscription.status === "trialing";
        if (userHaveSub) {
          setIsSub(true);
          if (t.subscription.type === premiumTypes.BUSSINESS_GOLD) {
            setTokensTableMap(["", "", "", "", "", ""]);
          } else {
            setTokensTableMap(["", ""]);
          }
        } else setIsSub(false);
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
    <div className="admin--page animate-fade-right">
      <UserDashboard
        setIsSub={setIsSub}
        setUserTokens={setUserTokens}
        setSnackMessage={setSnackMessage}
      />

      {!isSub && (
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
            <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>
              Twoja subskrypcja wygasła
            </h3>
            <p>Aby odnowić dostęp do pluginu, musisz wykupić subskrypcję.</p>
          </Box>
        </Modal>
      )}

      {isSub ? (
        <div className="admin--panel">
          <div className="tokens--wrapper">
            <p>
              tokeny {userTokens.length}/{tokensTableMap.length}
            </p>

            {tokensTableMap.map((item, index) => (
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
                      {userTokens[index].tokenName && (
                        <div className="token__name">
                          <TokenOutlined />
                          <span>{userTokens[index].tokenName}</span>
                          <span className="hovered left--color">Nazwa</span>
                        </div>
                      )}
                      <div
                        className="tokenID"
                        style={
                          userTokens[index].tokenName ? {} : { width: "80%" }
                        }
                      >
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
                  <AddToken
                    setSnackMessage={setSnackMessage}
                    setUserTokens={setUserTokens}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Subscription />
      )}

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
