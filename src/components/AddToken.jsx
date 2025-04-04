import { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { saveToken } from "../utils/http";
import SaveIcon from "@mui/icons-material/Save";
import { Token } from "@mui/icons-material";
import { Button } from "@mui/material";

const AddToken = ({ setSnackMessage, setUserTokens }) => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const handleAddToken = async (token) => {
    const type = authCtx.currentUserInfo.userInfo;
    setLoading(true);
    if (token) {
      const t = await saveToken(
        token,
        authCtx.currentUser.uid,
        type.subscription.type
      );
      if (t === true) {
        setSnackMessage({
          isVisible: true,
          title: "TOKEN",
          type: "success",
          message: "Token zapisany prawidłowo",
        });
        setUserTokens((prev) => [
          ...prev,
          { token: token, dateCreate: new Date().toISOString() },
        ]);
      } else {
        setSnackMessage({
          isVisible: true,
          title: "TOKEN",
          type: "error",
          message: t.error,
        });
      }
    } else {
      setSnackMessage({
        isVisible: true,
        title: "TOKEN",
        type: "error",
        message: "Musisz podać token",
      });
    }
    setToken("");
    setLoading(false);
  };

  const handleAdd = async () => {
    if (token) {
      await handleAddToken(token);
    }
  };

  return (
    <div className="tokens--wrapper__item__cos">
      <div className="center">
        <Token />
        <input
          type="text"
          onChange={(v) => {
            setToken(v.target.value);
          }}
          value={token}
        />
      </div>
      <div className="btn__wrapper ">
        <Button
          size="medium"
          color="success"
          onClick={handleAdd}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
          loading={loading}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddToken;
