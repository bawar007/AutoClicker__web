import { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { saveToken } from "../utils/http";
import SaveIcon from "@mui/icons-material/Save";
import { Token } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";

const AddToken = ({ setSnackMessage, setUserTokens }) => {
  const [token, setToken] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [loading, setLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const handleAddToken = async () => {
    const type = authCtx.currentUserInfo.userInfo;
    setLoading(true);

    if (token.length !== 0 && tokenName.length !== 0) {
      const t = await saveToken(
        token,
        authCtx.currentUser.uid,
        type.subscription.type,
        tokenName
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
          { token: token, dateCreate: new Date().toISOString(), tokenName },
        ]);
        setToken("");
      } else {
        setToken("");
        setSnackMessage({
          isVisible: true,
          title: "TOKEN",
          type: "error",
          message: t.error,
        });
      }
    } else if (token.length === 0) {
      setSnackMessage({
        isVisible: true,
        title: "TOKEN",
        type: "error",
        message: "Musisz podać token",
      });
    } else if (tokenName.length === 0) {
      setSnackMessage({
        isVisible: true,
        title: "TOKEN",
        type: "error",
        message: "Musisz podać nazwę",
      });
    }
    setLoading(false);
  };

  const handleAdd = async () => {
    await handleAddToken();
  };

  return (
    <div
      className="tokens--wrapper__item__cos"
      style={{ alignItems: "center" }}
    >
      <div className="left--name">
        <TextField
          label="Nazwa tokenu"
          type="text"
          margin="normal"
          style={{ width: "90%" }}
          value={tokenName}
          onChange={(e) => setTokenName(e.target.value)}
          required
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
        />
      </div>
      <div className="center" style={{ alignItems: "center", width: "70%" }}>
        <TextField
          label={`ID Tokenu`}
          type="text"
          margin="normal"
          style={{ width: "90%" }}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
          InputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
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
