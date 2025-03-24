import { useEffect, useState } from "react";
// import Navigation from "../Navigation/Navigation";
import "./Header.scss";
import Navigation from "../Navigation/Navigation";

const Header = ({ setAlertMessage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header style={isScrolled ? { backgroundColor: "#1f1d1d" } : {}}>
      <div>Logo</div>
      <Navigation setAlertMessage={setAlertMessage} />
    </header>
  );
};

export default Header;
