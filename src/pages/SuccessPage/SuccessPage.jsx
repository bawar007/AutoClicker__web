import { Button } from "@mui/material";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import SuccessAnimation from "../../assets/successAnimation.json";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const nav = useNavigate();

  const [sekToEnd, setSekToEnd] = useState(5);
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (sekToEnd < 1) {
        clearInterval(interval);
        nav("/panel", { replace: true });
      } else {
        setSekToEnd((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sessionId, sekToEnd, nav]);

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Lottie
        animationData={SuccessAnimation}
        style={{ width: "300px", height: "300px" }}
        loop={false}
        wmode="transparent"
        autoplay={true}
      />
      <h1 className="text-5xl font-extrabold text-green-400 leading-tight ">
        Dziękujemy za zakup!
      </h1>

      <p className="text-3xl font-extrabold text-green-400 leading-tight ">
        Twoja subskrypcja została aktywowana.
      </p>
      <Button
        onClick={() => {
          nav("/panel", { replace: true });
        }}
        size="large"
        variant="contained"
        style={{ margin: "20px 0" }}
      >
        Otwórz panel
      </Button>
      {sekToEnd !== 0 && (
        <p className="text-sm font-extrabold text-gray-100">
          AUTOMATYCZNE PRZEKIEROWANIE ZA: {sekToEnd}
        </p>
      )}
    </div>
  );
};

export default SuccessPage;
