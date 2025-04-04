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
    <header
      style={isScrolled ? { backgroundColor: "oklch(0.21 0.034 264.665)" } : {}}
    >
      <div
        style={{
          padding: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="./icons/ACLogoNoText.png" alt="logo" width={40} />
      </div>
      <Navigation setAlertMessage={setAlertMessage} />
    </header>
  );
};

export default Header;
