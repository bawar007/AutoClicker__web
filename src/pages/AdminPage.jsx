import { useContext, useEffect, useState } from "react";
import { deleteToken, getUserTokens, saveToken } from "../utils/http";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router";
import { OrbitProgress } from "react-loading-indicators";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

import "./AdminPage.scss";
import UserDashboard from "./UserDashboard/UserDashboard";
import { getUserInfo } from "../utils/subscriptionHTTP";
import { EventAvailable, Token } from "@mui/icons-material";

const AdminPage = ({ showMessage }) => {
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState("");
  const [tokenLoading, setTokenLoading] = useState(false);
  const [token2Loading, setToken2Loading] = useState(false);
  const [token2, setToken2] = useState("");
  const [userTokens, setUserTokens] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSub, setIsSub] = useState(false);

  const navigate = useNavigate();

  const handleAddToken = async (index) => {
    const tokenM = index === 0 ? token : token2;
    const type = await getUserInfo(authCtx.currentUser.uid);
    if (index === 0) setTokenLoading(true);
    if (index === 1) setToken2Loading(true);
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
    setToken2Loading(false);
    setTokenLoading(false);
  };

  const handleDeleteToken = async (token) => {
    const t = await deleteToken(token, authCtx.currentUser.uid);
    localStorage.setItem("items", "test");
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
    };

    const helperUser = async () => {
      const t = await getUserInfo(authCtx.currentUser.uid);
      if (t.subscription && t.subscription.status === "active") {
        setIsSub(true);
      } else setIsSub(false);

      setIsLoading(false);
    };

    if (authCtx.currentUser) {
      helper();
      helperUser();
    }
  }, [authCtx.currentUser]);

  if (isLoading) return <OrbitProgress size="small" variant="split-disc" />;

  return (
    <div className="admin--page">
      <UserDashboard setIsSub={setIsSub} setUserTokens={setUserTokens} />
      {isSub ? (
        <div className="admin--panel">
          <div className="tokens--wrapper">
            <p>Zapisane tokeny {userTokens.length}/2</p>

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
                          handleDeleteToken(userTokens[index].token, index)
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
                        onClick={() => handleAddToken(index)}
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
    </div>
  );
};

export default AdminPage;
