import { Button } from "@mui/material";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import CancelAnimation from "../../assets/cancelAnimation.json";

const CancelPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const nav = useNavigate();

  const [sekToEnd, setSekToEnd] = useState(5);
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      if (sekToEnd < 1) {
        clearInterval(interval);
        nav("/", { replace: true });
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
        animationData={CancelAnimation}
        style={{ width: "300px", height: "300px" }}
        loop={true}
        wmode="transparent"
        autoplay={true}
      />
      <h1 className="text-5xl font-extrabold text-green-400 leading-tight ">
        Proces anulowania subskrypcji
      </h1>

      <p className="text-3xl font-extrabold text-green-400 leading-tight ">
        Twoja subskrypcja została anulowana.
      </p>
      <Button
        onClick={() => {
          nav("/", { replace: true });
        }}
        size="large"
        variant="contained"
        style={{ margin: "20px 0" }}
      >
        Wróć do strony głównej
      </Button>
      {sekToEnd !== 0 && (
        <p className="text-sm font-extrabold text-gray-100">
          AUTOMATYCZNE PRZEKIEROWANIE ZA: {sekToEnd}
        </p>
      )}
    </div>
  );
};

export default CancelPage;
