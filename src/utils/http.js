import axios from "axios";

export const saveToken = async (token, uid) => {
  try {
    const response = await axios.post("http://localhost:5000/addtoken", {
      token,
      uid,
    });

    console.log("Token zapisany:", response.data);
  } catch (error) {
    console.error(
      "Błąd podczas zapisu tokena:",
      error.response?.data || error.message
    );
  }
};

export const saveUser = async (user) => {
  try {
    const response = await axios.post("http://192.168.91.15:5000/saveuser", {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "",
    });
    if (response) return true;
    else return false;
  } catch (error) {
    console.error(
      "Błąd podczas zapisu użytkownika:",
      error.response?.data || error.message
    );
    return false;
  }
};

export const getUserTokens = async (uid) => {
  try {
    const response = await axios.get(
      `http://192.168.91.15:5000/gettokens/${uid}`
    );

    console.log(response);
    if (response.data.success) return response.data.tokens;
    else return false;
  } catch (error) {
    console.error(
      "Błąd podczas pobierania danych",
      error.response?.data || error.message
    );
    return false;
  }
};
