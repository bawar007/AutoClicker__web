import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/auth-context";
import { cancelSubHTTP } from "../../utils/subscriptionHTTP";
import { deleteToken } from "../../utils/http";
import Subscription from "../../components/Subscription/Subscriptions";
import { OrbitProgress } from "react-loading-indicators";

import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteSubIcon from "@mui/icons-material/Cancel";
import DeleteAccount from "@mui/icons-material/AccountCircle";

import Email from "@mui/icons-material/Email";
import SubAnimation from "../../assets/subAnimation.json";
import DateEndIcon from "@mui/icons-material/EventRepeat";

import {
  DateRange,
  HowToReg,
  MilitaryTech,
  EditCalendar,
} from "@mui/icons-material";

import "./UserDashboard.scss";
import Lottie from "lottie-react";

const UserDashboard = ({ setIsSub, setUserTokens, setSnackMessage }) => {
  const [subscription, setSubscription] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState([]);
  const [dataLoad, setDataLoad] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    photo: "",
    createdAt: null,
    load: false,
  });
  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    description: "",
    callAccept: () => {},
  });

  const handleClickOpenDeleteAccound = () => {
    setDialog((prev) => ({
      ...prev,
      open: true,
      title: "Usuń konto",
      description: "Czy na pewno chcesz usunąć konto?",
      callAccept: () => {
        setSnackMessage({
          isVisible: true,
          title: "KONTO",
          type: "success",
          message: "Konto zostało usunięte",
        });
        handleClose();
      },
    }));
  };

  const handleClickOpenDeleteSubscription = () => {
    setDialog((prev) => ({
      ...prev,
      open: true,
      title: "Anuluj subskrypcję",
      description: "Czy na pewno chcesz anulować subskrypcję?",
      callAccept: () => {
        handleCancelSubscription();
        handleClose();
      },
    }));
  };

  const handleClose = (who, text) => {
    setDialog((prev) => ({
      ...prev,
      open: false,
      title: "",
      description: "",
      callAccept: () => {},
    }));

    if (who && text) {
      setSnackMessage({
        isVisible: true,
        title: who,
        type: "success",
        message: text,
      });
    }
  };

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const h = async () => {
      if (authCtx.currentUser) {
        const user = authCtx.currentUser;
        setUserData({
          email: user.email || "",
          name: user.displayName || "",
          photo: user.photoURL || false,
          createdAt: user.metadata.creationTime || null,
          load: true,
        });
        const t = authCtx.currentUserInfo.userInfo;

        if (t) {
          setSubscription(t.subscription);
        }
      }
    };
    const userTokens = async () => {
      const t = authCtx.currentUserInfo.userTokens;
      setTokens(t);
      setDataLoad(false);
    };
    userTokens();
    h();
  }, [authCtx.currentUserInfo, authCtx.currentUser]);

  const handleCancelSubscription = async () => {
    setLoading(true);
    await cancelSubHTTP(authCtx.currentUser);
    if (tokens.length) {
      tokens.forEach(async (item) => {
        await deleteToken(item.token, authCtx.currentUser.uid);
      });
    }

    setSnackMessage({
      isVisible: true,
      title: "SUBSKRYPCJA",
      type: "success",
      message: "Subskrypcja została anulowana",
    });

    setIsSub(false);
    setUserTokens([]);
    setTokens([]);
    setLoading(false);
    setSubscription(null);
  };

  if (dataLoad || !userData.load) {
    return <OrbitProgress />;
  }

  return (
    <div
      className="user--dashboard"
      style={
        !subscription
          ? {
              flexDirection: "column",
              width: "100%",
              backgroundColor: "#006494",
            }
          : {}
      }
    >
      {userData.load ? (
        <div className="user--dashboard__userWrapper">
          <div
            className="left"
            style={
              !subscription
                ? {
                    width: "100%",
                    marginBottom: "50px",
                    borderTopRightRadius: "20px",
                  }
                : {}
            }
          >
            <div className="left__info">
              <h3>TWOJE DANE</h3>
              {userData.photo ? (
                <img
                  src={userData.photo}
                  alt="PHOTO"
                  width={100}
                  referrerPolicy="no-referrer"
                />
              ) : null}
              <div className="mySpan">
                <span className="mySpan__content">
                  <Email /> {userData.email}
                  <span className="hovered left--color">Adres e-mail</span>
                </span>
              </div>
              <div className="mySpan">
                <span className="mySpan__content">
                  <DeleteAccount />
                  {userData.name.toLocaleUpperCase()}
                  <span className="hovered left--color">Nazwa użytkownika</span>
                </span>
              </div>
              <div className="mySpan">
                <span className="mySpan__content">
                  <EditCalendar />
                  {new Date(userData.createdAt).toLocaleDateString()}
                  <span className="hovered left--color">
                    Data utworzenia konta
                  </span>
                </span>
              </div>
              <Button
                size="medium"
                onClick={handleClickOpenDeleteAccound}
                startIcon={<DeleteAccount />}
                variant="contained"
                color="error"
              >
                Usuń konto
              </Button>
            </div>
          </div>
          <div
            className="right"
            style={!subscription ? { display: "none" } : {}}
          >
            {subscription ? (
              <>
                <div className="right__info">
                  <h3>SUBSKRYPCJA</h3>
                  <Lottie
                    animationData={SubAnimation}
                    style={{ width: "150px", height: "150px" }}
                    loop={false}
                    wmode="transparent"
                    autoplay={true}
                    className="lottie--animation"
                  />
                  <div className="mySpan">
                    <span className="mySpan__content">
                      <MilitaryTech />
                      {subscription.type}
                      <span className="hovered right--color">Typ konta</span>
                    </span>
                  </div>

                  <div className="mySpan">
                    <span className="mySpan__content">
                      <HowToReg />
                      {subscription.status
                        ? subscription.status.toLocaleUpperCase()
                        : "BRAK"}
                      <span className="hovered right--color">
                        Status subskypcji
                      </span>
                    </span>
                  </div>
                  <div className="mySpan">
                    <span className="mySpan__content">
                      <DateEndIcon />{" "}
                      {subscription.dateEnd.toLocaleDateString()}
                      <span className="hovered right--color">
                        Data odnowienia subskrypcji
                      </span>
                    </span>
                  </div>
                  <div className="mySpan">
                    <span className="mySpan__content">
                      <DateRange />
                      {Math.ceil(
                        Math.abs(subscription.dateEnd - new Date()) /
                          (1000 * 60 * 60 * 24)
                      )}
                      dni
                      <span className="hovered right--color">
                        Ilość dni do odnowienia subskrypcji
                      </span>
                    </span>
                  </div>
                  {subscription.status === "active" && (
                    <>
                      <Button
                        size="large"
                        onClick={() => {
                          window.open(
                            "https://billing.stripe.com/p/login/test_8wM5mV5ka2bAdm8000",
                            "_blank"
                          );
                        }}
                        variant="contained"
                        color="primary"
                      >
                        Zarządzaj subskrypcją
                      </Button>
                      <Button
                        size="large"
                        onClick={handleClickOpenDeleteSubscription}
                        startIcon={<DeleteSubIcon />}
                        loadingPosition="start"
                        loading={loading}
                        variant="contained"
                        color="warning"
                      >
                        {loading ? " Anulowanie..." : " Anuluj subskrypcję"}
                      </Button>
                    </>
                  )}
                </div>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
      {subscription ? null : <Subscription />}

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

export default UserDashboard;
