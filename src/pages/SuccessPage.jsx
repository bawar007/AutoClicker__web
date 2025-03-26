import { useEffect } from "react";
import { useSearchParams } from "react-router";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

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
    </div>
  );
};

export default SuccessPage;
