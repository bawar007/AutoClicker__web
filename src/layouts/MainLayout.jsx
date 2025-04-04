import Header from "../components/Header/Header";
import { NavLink, Outlet } from "react-router";

const MainLayout = ({ setAlertMessage }) => {
  return (
    <>
      <Header setAlertMessage={setAlertMessage} />
      <main style={{ width: "100%" }}>
        <Outlet />
      </main>
      <footer>
        <NavLink to="/regulamin">Regulamin</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/policy">Polityka Prywatności</NavLink>
      </footer>
    </>
  );
};

export default MainLayout;
