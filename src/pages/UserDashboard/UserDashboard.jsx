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

import { DateRange, HowToReg, MilitaryTech } from "@mui/icons-material";

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
    <div className="user--dashboard">
      {userData.load ? (
        <div className="user--dashboard__userWrapper">
          <div className="right">
            <h3>TWOJE DANE</h3>
            <img
              src={userData.photo}
              srcSet={userData.photo}
              alt="PHOTO"
              width={100}
            />
            <div className="right__info">
              <span className="mySpan">
                <Email /> {userData.email}
              </span>
              <span className="mySpan">
                <DeleteAccount />
                {userData.name}
              </span>
              <span className="mySpan">
                <DateEndIcon />
                {new Date(userData.createdAt).toLocaleDateString()}
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
          <div className="bottom">
            {subscription ? (
              <>
                <h3>SUBSKRYPCJA</h3>
                <div className="anim">
                  <Lottie
                    animationData={SubAnimation}
                    width={"50px"}
                    height={"50px"}
                    loop={false}
                  />
                </div>
                <div className="bottom__info">
                  <span className="mySpan">
                    <MilitaryTech />
                    {subscription.type}
                    {/* Typ:  */}
                  </span>

                  <span className="mySpan">
                    <HowToReg />
                    {subscription.status ? subscription.status : "Brak"}
                    {/* Status: */}
                  </span>
                  <span className="mySpan">
                    <DateEndIcon /> {subscription.dateEnd.toLocaleDateString()}
                  </span>
                  <span className="mySpan">
                    <DateRange />
                    {Math.ceil(
                      Math.abs(subscription.dateEnd - new Date()) /
                        (1000 * 60 * 60 * 24)
                    )}
                    dni
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
