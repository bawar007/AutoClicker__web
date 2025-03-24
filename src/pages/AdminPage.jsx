import { useContext, useEffect, useState } from "react";
import { getUserTokens, saveToken } from "../utils/http";
import { AuthContext } from "../context/auth-context";

const AdminPage = () => {
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState("");
  const [userTokens, setUserTokens] = useState("");

  const handleAddToken = async () => {
    if (token) {
      await saveToken(token, authCtx.currentUser.uid);
      setUserTokens((prev) => [...prev, token]);
    }
  };

  useEffect(() => {
    const helper = async () => {
      const tokens = await getUserTokens(authCtx.currentUser.uid);
      if (tokens) setUserTokens(tokens);
    };

    helper();
  }, []);

  return (
    <div className="admin--panel">
      <p>Create Token</p>
      <p>Twoje tokeny {userTokens.length}/2</p>

      {["", ""].map((item, index) => (
        <div>
          {userTokens[index] ? (
            <p>{userTokens[index]}</p>
          ) : (
            <div>
              <input
                type="text"
                onChange={(v) => setToken(v.target.value)}
                value={token}
              />
              <button onClick={handleAddToken}>Dodaj plugin</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
