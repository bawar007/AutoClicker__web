import axios from "axios";

const URL = "http://192.168.0.105:5000";

export const saveToken = async (token, uid, type) => {
  console.log(type);

  try {
    await axios.post(`${URL}/addtoken`, {
      token,
      uid,
      type,
    });
    return true;
  } catch (error) {
    console.error(
      "Błąd podczas zapisu tokena:",
      error.response?.data || error.message
    );
    return error.response?.data || error.message;
  }
};

export const deleteToken = async (token, uid) => {
  try {
    await axios.post(`${URL}/deletetoken`, {
      token,
      uid,
    });
    return true;
  } catch (error) {
    console.error(
      "Błąd podczas usuwania tokena:",
      error.response?.data || error.message
    );
    return error.response?.data || error.message;
  }
};

export const saveUser = async (user) => {
  try {
    const response = await axios.post(`${URL}/saveuser`, {
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
    const response = await axios.get(`${URL}/gettokens/${uid}`);

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
