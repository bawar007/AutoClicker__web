import "./Navigation.scss";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = ({ setAlertMessage, bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav
      className="bg-gray-800 p-4 text-white"
      style={bgColor ? { backgroundColor: bgColor } : {}}
    >
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-6 md:p-0 md:flex md:items-center transition-all flex-col md:flex-row items-center myMenu ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <NavLink to="/" className="block md:inline-block px-4 py-2 w-full">
            HOME
          </NavLink>
          <NavLink to="/panel" className="block md:inline-block px-4 py-2">
            PANEL
          </NavLink>
          <button onClick={handleLogout} className="logout__btn">
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
