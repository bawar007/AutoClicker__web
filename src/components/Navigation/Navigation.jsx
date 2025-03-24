import "./Navigation.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { NavLink, useNavigate } from "react-router";

const Navigation = ({ setAlertMessage }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setAlertMessage({
        isVisible: true,
        title: "",
        type: "success",
        message: "Wylogowano !!",
      });
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Błąd podczas wylogowywania:", error);
    }
  };

  return (
    <nav>
      <NavLink to="/panel">Panel zarządania</NavLink>
      <button onClick={handleLogout}>Log out</button>
    </nav>
  );
};

export default Navigation;
