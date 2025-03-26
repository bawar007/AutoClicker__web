import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../context/auth-context";
import { getUserInfp } from "../utils/http";

const UserDashboard = () => {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const user = authCtx.currentUser;
  useEffect(() => {
    const h = async () => {
      if (user) {
        const t = await getUserInfp(user.uid);
        console.log(t);
        if (t) {
          setSubscription(t.subscription);
        }
      }
    };
    h();
  }, [user]);

  const handleCancelSubscription = async () => {
    setLoading(true);
    const res = await fetch("http://192.168.0.105:5000/cancel-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: user.uid }),
    });

    const data = await res.json();
    alert(data.message);
    setLoading(false);
    setSubscription((prev) => ({ ...prev, status: "canceled" }));
  };

  return (
    <div>
      <h2>Twój status subskrypcji:</h2>
      {subscription ? (
        <>
          <p>Status: {subscription.status ? subscription.status : "Brak"}</p>
          {subscription.status === "active" && (
            <button onClick={handleCancelSubscription} disabled={loading}>
              {loading ? "Anulowanie..." : "Anuluj subskrypcję"}
            </button>
          )}
        </>
      ) : (
        <p>Brak aktywnej subskrypcji</p>
      )}
    </div>
  );
};

export default UserDashboard;
