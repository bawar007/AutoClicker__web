import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/auth-context";
import { cancelSubHTTP, getUserInfo } from "../utils/subscriptionHTTP";
import { deleteToken, getUserTokens } from "../utils/http";
import Subscription from "../components/Subscription/Subscriptions";

const UserDashboard = () => {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState([]);

  const authCtx = useContext(AuthContext);
  const user = authCtx.currentUser;
  useEffect(() => {
    const h = async () => {
      if (user) {
        const t = await getUserInfo(user.uid);
        console.log(t);

        if (t) {
          setSubscription(t.subscription);
        }
      }
    };
    const userTokens = async () => {
      const t = await getUserTokens(user.uid);
      setTokens(t);
    };
    userTokens();
    h();
  }, [user]);

  const handleCancelSubscription = async () => {
    setLoading(true);
    await cancelSubHTTP(user);
    if (tokens.length) {
      tokens.forEach(async (item) => {
        await deleteToken(item, user.uid);
      });
    }

    setLoading(false);
    setSubscription(null);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      {subscription ? (
        <>
          <h2>Twój status subskrypcji: {subscription.type}</h2>

          <p>Status: {subscription.status ? subscription.status : "Brak"}</p>
          <p>Wygasa: {subscription.dateEnd.toLocaleDateString()}</p>
          <p>
            Pozostało:{" "}
            {Math.ceil(
              Math.abs(subscription.dateEnd - new Date()) /
                (1000 * 60 * 60 * 24)
            )}
            dni.
          </p>
          {subscription.status === "active" && (
            <button onClick={handleCancelSubscription} disabled={loading}>
              {loading ? "Anulowanie..." : "Anuluj subskrypcję"}
            </button>
          )}
        </>
      ) : (
        <Subscription />
      )}
    </div>
  );
};

export default UserDashboard;
