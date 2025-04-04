import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/auth-context";

const DashboardRedirect = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const h = async () => {
      if (authCtx.currentUser) {
        const t = authCtx.currentUserInfo.userInfo;

        if (t) {
          // const urlParams = new URLSearchParams(window.location.search);
          // const token = urlParams.get("token");
          if (t.subscription) {
            navigate("/panel");
          } else {
            navigate("/");
          }
        }
      }
    };

    h();
  }, [authCtx.currentUserInfo, authCtx.currentUser, navigate]);

  return <p>Sprawdzanie subskrypcji...</p>;
};

export default DashboardRedirect;
