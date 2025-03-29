import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/auth-context";
import { cancelSubHTTP, getUserInfo } from "../../utils/subscriptionHTTP";
import { deleteToken, getUserTokens } from "../../utils/http";
import Subscription from "../../components/Subscription/Subscriptions";
import { OrbitProgress } from "react-loading-indicators";

import { Button } from "@mui/material";
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

const UserDashboard = ({ setIsSub, setUserTokens }) => {
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

  const authCtx = useContext(AuthContext);
  const user = authCtx.currentUser;

  useEffect(() => {
    const h = async () => {
      if (user) {
        setUserData({
          email: user.email ? user.email : "",
          name: user.displayName ? user.displayName : "",
          photo: user.photoURL ? user.photoURL : "",
          createdAt: user.metadata ? user.metadata.creationTime : null,
          load: true,
        });
        const t = await getUserInfo(user.uid);

        if (t) {
          setSubscription(t.subscription);
        }
      }
    };
    const userTokens = async () => {
      const t = await getUserTokens(user.uid);
      setTokens(t);
      setDataLoad(false);
    };
    userTokens();
    h();
  }, [user]);

  const handleCancelSubscription = async () => {
    setLoading(true);
    await cancelSubHTTP(user);
    if (tokens.length) {
      tokens.forEach(async (item) => {
        await deleteToken(item.token, user.uid);
      });
    }

    setIsSub(false);
    setUserTokens([]);
    setTokens([]);
    setLoading(false);
    setSubscription(null);
  };

  if (dataLoad) {
    return <OrbitProgress />;
  }

  return (
    <div
      className="user--dashboard"
      style={!subscription ? { flexDirection: "column", width: "100%" } : {}}
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
              {userData.photo && (
                <img src={userData.photo} alt="PHOTO" width={100} />
              )}
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
                onClick={() => {
                  console.log("delete");
                }}
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
                    <Button
                      size="large"
                      onClick={handleCancelSubscription}
                      startIcon={<DeleteSubIcon />}
                      loadingPosition="start"
                      loading={loading}
                      variant="contained"
                      color="warning"
                    >
                      {loading ? " Anulowanie..." : " Anuluj subskrypcję"}
                    </Button>
                  )}
                </div>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
      {subscription ? null : <Subscription />}
    </div>
  );
};

export default UserDashboard;
