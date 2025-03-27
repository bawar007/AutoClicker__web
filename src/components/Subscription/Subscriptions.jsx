import { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContext } from "../../context/auth-context";

// const stripePromise = loadStripe(
//   "pk_live_51R6F1BIbcuVy4eFvReGUnFek7mrUSQVdB36HVakroHUVXXvlo37ipn4t6jZLcMoixYrnJlysFZOPocevrA0mOoBd0002tTd4fs"
// );
const stripePromise = loadStripe(
  "pk_test_51R6F1LIbb7FrsP92jdPrswDqHy7pBrwENP9kXnkD3NBsh04cyir7aOIW4HHGWiVGhMjerqP4IpQaRs3A0AoG1pDk00OSaNltrV"
);

const Subscription = ({
  duration,
  price,
  type,
  description,
  bestValue,
  priceId,
}) => {
  const [loading, setLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const handleSubscribe = async () => {
    setLoading(true);
    const user = authCtx.currentUser;

    if (!user) {
      alert("Musisz się zalogować");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        "http://192.168.91.15:5000/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uid: user.uid,
            email: user.email,
            priceId,
          }),
        }
      );

      const { sessionId } = await res.json();
      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Błąd:", error);
    }

    setLoading(false);
  };

  return (
    <div
      className={`p-6 rounded-2xl shadow-lg w-full text-center ${
        bestValue ? "border-2 border-green-400 bg-gray-800" : "bg-gray-900"
      }`}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "300px",
        justifyContent: "space-between",
        padding: "10px",
        alignItems: "center",
        paddingBottom: "20px",
      }}
    >
      <h3 className="text-4xl font-bold text-green-400">{duration}</h3>
      <h2 className="text-2xl font-bold text-green-400">{type}</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p className="text-2xl font-semibold text-white mt-2">{price}zł</p>
        {price === 549.99 && (
          <span style={{ color: "gray", fontSize: "12px" }}>
            To {parseInt(price / 12)}zł/msc oszczędzasz{" "}
            {parseInt(49.99 * 12 - price)}zł
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {description.map((item, index) => (
          <p
            className="text-gray-400 mt-2 text-lg whitespace-pre-line"
            style={{ marginBottom: "10px" }}
            key={`description-${index}`}
          >
            {item}
          </p>
        ))}
      </div>
      <button
        className=" bg-orange-500 hover:pointer hover:bg-orange-600 px-6 text-xlg py-2 rounded-lg text-white font-semibold shadow-md"
        style={{
          width: "70%",
          padding: "10px",
        }}
        onClick={handleSubscribe}
      >
        {loading ? "Ładowanie..." : "Kup subskrypcję"}
      </button>
    </div>
  );
};

export default Subscription;
