import { useContext, useEffect, useState } from "react";
import {
  deleteToken,
  getUserInfp,
  getUserTokens,
  saveToken,
} from "../utils/http";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router";
import { OrbitProgress } from "react-loading-indicators";

import "./AdminPage.scss";
import UserDashboard from "./UserDashboard";

const AdminPage = ({ showMessage }) => {
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState("");
  const [token2, setToken2] = useState("");
  const [userTokens, setUserTokens] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const handleAddToken = async (index) => {
    const tokenM = index === 0 ? token : token2;
    const type = await getUserInfp(authCtx.currentUser.uid);

    if (tokenM) {
      const t = await saveToken(
        tokenM,
        authCtx.currentUser.uid,
        type.subscription.type
      );
      if (t === true) {
        showMessage({
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
        showMessage({
          isVisible: true,
          title: "TOKEN",
          type: "error",
          message: t.error,
        });
      }
    } else {
      showMessage({
        isVisible: true,
        title: "TOKEN",
        type: "error",
        message: "Musisz podać token",
      });
    }
  };

  const handleDeleteToken = async (token) => {
    const t = await deleteToken(token, authCtx.currentUser.uid);
    if (t === true) {
      const newTokens = userTokens.filter((item) => item.token !== token);
      setUserTokens(newTokens);
      showMessage({
        isVisible: true,
        title: "TOKEN",
        type: "success",
        message: "Token usunięty",
      });
    } else {
      showMessage({
        isVisible: true,
        title: "TOKEN",
        type: "error",
        message: t.error,
      });
    }
  };

  useEffect(() => {
    if (authCtx.currentUser === false) {
      navigate("/login", { replace: true });
    }
  }, [authCtx.currentUser, navigate]);

  useEffect(() => {
    const helper = async () => {
      const tokens = await getUserTokens(authCtx.currentUser.uid);
      if (tokens) setUserTokens(tokens);
      setIsLoading(false);
    };
    if (authCtx.currentUser) helper();
  }, [authCtx.currentUser]);

  if (isLoading) return <OrbitProgress size="small" variant="split-disc" />;

  return (
    <div className="admin--panel">
      <div className="tokens--wrapper">
        <p>Twoje tokeny {userTokens.length}/2</p>

        {["", ""].map((item, index) => (
          <div className="tokens--wrapper__item" key={`item-${index}`}>
            {userTokens[index] ? (
              <div className="tokens--wrapper__item__cos">
                <div className="left">
                  <p>{index + 1}</p>
                </div>
                <div className="center">
                  <div className="date">
                    <p>DATA UTWORZENIA</p>
                    <span>
                      {new Date(
                        userTokens[index].dateCreate
                      ).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="tokenID">
                    <p>ID</p>
                    <span>{userTokens[index].token}</span>
                  </div>
                </div>
                <div className="btn__wrapper ">
                  <button
                    className="btn__wrapper__delete"
                    onClick={() =>
                      handleDeleteToken(userTokens[index].token, index)
                    }
                  >
                    USUŃ
                  </button>
                </div>
              </div>
            ) : (
              <div key={`item-${index}`} className="tokens--wrapper__item__cos">
                <div className="left">
                  <p>{index + 1}</p>
                </div>

                <div className="center">
                  <p style={{ marginRight: "5px" }}>ID</p>
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
                  <button
                    onClick={() => handleAddToken(index)}
                    className="btn__wrapper__add"
                  >
                    DODAJ
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <UserDashboard />
    </div>
  );
};

export default AdminPage;
