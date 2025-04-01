import React, { useContext, useEffect, useState } from "react";
import { subscribeHTTP } from "../../utils/subscriptionHTTP";
import { AuthContext } from "../../context/auth-context";

const SubscriptionItem = ({ subscription, setDialog }) => {
  const [loading, setLoading] = useState(false);
  const [userHaveSub, setUserHaveSub] = useState(false);
  const authCtx = useContext(AuthContext);

  const handleClose = () => {
    setDialog((prev) => ({
      ...prev,
      open: false,
      title: "",
      description: "",
      callAccept: () => {},
    }));
  };

  const handleClickOpenSubscription = (priceId) => {
    if (userHaveSub) {
      setDialog((prev) => ({
        ...prev,
        open: true,
        title: "Subskrypcja",
        description: "Już posiadasz subskrypcje. Czy chcesz ją zmienić ?",
        callAccept: () => {
          window.open(
            "https://billing.stripe.com/p/login/test_8wM5mV5ka2bAdm8000?prefilled_email=" +
              authCtx.currentUser.email,
            "_blank"
          );
          handleClose();
        },
      }));
    } else {
      handleSubscribe(priceId);
    }
  };

  const handleSubscribe = async (priceId) => {
    setLoading(true);
    const user = authCtx.currentUser;

    if (!user) {
      alert("Musisz się zalogować");
      setLoading(false);
      return;
    }

    await subscribeHTTP(user, priceId);

    setLoading(false);
  };

  useEffect(() => {
    if (authCtx.currentUserInfo)
      if (authCtx.currentUserInfo.userInfo.subscription) {
        const userHaveSub =
          authCtx.currentUserInfo.userInfo.subscription.status === "active";
        setUserHaveSub(userHaveSub);
      } else {
        setUserHaveSub(false);
      }
  }, [authCtx.currentUserInfo]);

  return (
    <div
      className={`p-6 rounded-2xl shadow-lg  text-center bg-gray-800 ${
        subscription.bestValue && "border-2 border-green-400"
      }`}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "300px",
        justifyContent: "space-between",
        padding: "10px",
        alignItems: "center",
        paddingBottom: "20px",
        width: "40%",
        boxShadow: "0px 0px 10px black",
      }}
    >
      <h3 className="text-4xl font-bold text-green-400">
        {subscription.duration}
      </h3>
      <h2 className="text-2xl font-bold text-green-400">{subscription.type}</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p className="text-2xl font-semibold text-white mt-2">
          {subscription.price}zł
        </p>
        {subscription.price === 549.99 && (
          <span style={{ color: "gray", fontSize: "12px" }}>
            To {parseInt(subscription.price / 12)}zł/msc oszczędzasz{" "}
            {parseInt(49.99 * 12 - subscription.price)}zł rocznie
          </span>
        )}
        {subscription.price === 89.99 && (
          <span style={{ color: "gray", fontSize: "12px" }}>
            To {parseInt(subscription.price / 12)}zł/msc oszczędzasz{" "}
            {parseInt(9.99 * 12 - subscription.price)}zł rocznie
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {subscription.description.map((item, index) => (
          <div
            className="description__wrapper--item"
            key={`description-${index}`}
            style={{ marginBottom: "10px", display: "flex" }}
          >
            <p className="text-gray-400 mt-2 text-lg whitespace-pre-line">✔</p>
            <p
              className="text-gray-400 mt-2 text-lg whitespace-pre-line"
              style={{ marginLeft: "10px", textAlign: "justify" }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
      <button
        className={` ${"hover:pointer hover:bg-orange-600 bg-orange-500"}  px-6 text-xlg py-2 rounded-lg text-white font-semibold shadow-md`}
        style={{
          width: "70%",
          padding: "10px",
        }}
        onClick={() => handleClickOpenSubscription(subscription.priceId)}
      >
        {loading ? "Ładowanie..." : userHaveSub ? "Zmień plan" : "Kup Teraz"}
      </button>
    </div>
  );
};

export default SubscriptionItem;
