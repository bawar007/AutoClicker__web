import { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { Outlet, useNavigate } from "react-router";
//import { OrbitProgress } from "react-loading-indicators";

const MainLayout = () => {
  //   const [isLoading, setIsLoading] = useState(true);

  //   const authCtx = useContext(AuthContext);
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     if (authCtx.currentUser === false) {
  //       navigate("/login", { replace: true });
  //     } else if (authCtx.currentUser !== null) {
  //       setIsLoading(false);
  //     }
  //   }, [authCtx.currentUser, navigate]);

  //   if (isLoading) return <OrbitProgress size="small" variant="split-disc" />;

  return (
    <>
      <Header />
      <main style={{ width: "100%" }}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
