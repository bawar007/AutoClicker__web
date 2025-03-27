import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const nav = useNavigate();

  useEffect(() => {
    if (sessionId) {
      console.log("ID sesji:", sessionId);
      // Tutaj możesz wysłać zapytanie do backendu, aby potwierdzić płatność
    }
  }, [sessionId]);

  return (
    <div>
      <h1>Dziękujemy za zakup!</h1>
      <p>Twoja subskrypcja została aktywowana.</p>
      <button
        onClick={() => {
          nav("/panel", { replace: true });
        }}
      >
        Wróć
      </button>
    </div>
  );
};

export default SuccessPage;
