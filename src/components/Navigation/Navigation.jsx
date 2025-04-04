import "./Navigation.scss";
import { NavLink, useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../../context/auth-context";
import { Dashboard, Home, Logout } from "@mui/icons-material";

const Navigation = ({ setAlertMessage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      authCtx.logout();
      setIsOpen(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="bg-gray-800 p-4 text-white"
      style={isScrolled ? { backgroundColor: "oklch(0.21 0.034 264.665)" } : {}}
    >
      <div
        className="container mx-auto flex justify-between items-center"
        style={
          isScrolled ? { backgroundColor: "oklch(0.21 0.034 264.665)" } : {}
        }
      >
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <div
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent p-6 lg:p-0 lg:flex lg:items-center transition-all flex-col lg:flex-row items-center myMenu ${
            isOpen ? "flex" : "hidden"
          }`}
          style={
            isScrolled ? { backgroundColor: "oklch(0.21 0.034 264.665)" } : {}
          }
        >
          <div className="link--wrapper">
            <NavLink
              to="/"
              className="block lg:inline-block px-4 py-2 w-full"
              onClick={() => setIsOpen(false)}
            >
              <Home />
              HOME
            </NavLink>
          </div>
          <div className="link--wrapper">
            <NavLink
              to="/panel"
              className="block lg:inline-block px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              <Dashboard />
              PANEL
            </NavLink>
          </div>

          <div className="link--wrapper">
            {authCtx.currentUser ? (
              <button onClick={handleLogout} className="logout__btn">
                <Logout />
                Wyloguj
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="logout__btn"
              >
                Zaloguj
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
