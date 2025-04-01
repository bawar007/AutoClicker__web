import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

// const stripePromise = loadStripe(
//   "pk_live_51R6F1BIbcuVy4eFvReGUnFek7mrUSQVdB36HVakroHUVXXvlo37ipn4t6jZLcMoixYrnJlysFZOPocevrA0mOoBd0002tTd4fs"
// );

const stripePromise = loadStripe(
  "pk_test_51R6F1LIbb7FrsP92jdPrswDqHy7pBrwENP9kXnkD3NBsh04cyir7aOIW4HHGWiVGhMjerqP4IpQaRs3A0AoG1pDk00OSaNltrV"
);

const URL = "https://api.autoclicker.pl";

export const subscribeHTTP = async (user, priceId) => {
  try {
    const res = await axios.post(
      `${URL}/create-checkout-session`,
      {
        uid: user.uid,
        email: user.email,
        priceId,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const { sessionId } = res.data;
    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId });
  } catch (error) {
    console.error("Błąd:", error);
  }
};

export const getUserInfo = async (uid) => {
  try {
    const response = await axios.get(`${URL}/getuser/${uid}`);

    if (response.data.success) {
      if (
        response.data.user.subscription &&
        response.data.user.subscription.priceId
      ) {
        if (
          response.data.user.subscription.priceId ===
            "price_1R8gYqIbb7FrsP92WbLj8sf1" ||
          response.data.user.subscription.priceId ===
            "price_1R8gZEIbb7FrsP92TxwOZ4rV"
        ) {
          return {
            ...response.data.user,
            subscription: {
              ...response.data.user.subscription,
              dateEnd: new Date(response.data.user.subscription.expiresAt),
              type: "GOLD",
            },
          };
        } else {
          return {
            ...response.data.user,
            subscription: {
              ...response.data.user.subscription,
              dateEnd: new Date(response.data.user.subscription.expiresAt),
              type: "BASIC",
            },
          };
        }
      } else {
        return response.data.user;
      }
    }
  } catch (error) {
    console.error(
      "Błąd podczas pobierania danych",
      error.response?.data || error.message
    );
    return false;
  }
};
