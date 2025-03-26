import Header from "../components/Header/Header";
import { Outlet } from "react-router";

const MainLayout = ({ setAlertMessage }) => {
  return (
    <>
      <Header setAlertMessage={setAlertMessage} />
      <main style={{ width: "100%" }}>
        <Outlet />
      </main>
      <footer
        style={{
          width: "100%",
          padding: "20px",
          backgroundColor: "oklch(27.8% 0.033 256.848deg)",
        }}
      >
        Stopka
      </footer>
    </>
  );
};

export default MainLayout;
