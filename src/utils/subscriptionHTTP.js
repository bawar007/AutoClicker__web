import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const premiumTypes = {
  BUSSINESS_GOLD: "BUSINESS GOLD",
  GOLD: "GOLD",
  BASIC: "BASIC",
};

const pricesTypes = {
  BUSSINESS_GOLD_MONTH: "price_1RAW3JIbcuVy4eFvie55hisK",
  BUSSINESS_GOLD_YEAR: "price_1RAW3JIbcuVy4eFvRsN5Yvt0",
  GOLD_MONTH: "price_1RAW3PIbcuVy4eFvUfuw3k1M",
  GOLD_YEAR: "price_1REB1GIbcuVy4eFvXnUzyt3q",
  BASIC_MONTH: "price_1RAW3UIbcuVy4eFvi3TA1H2i",
  BASIC_YEAR: "price_1RAW3UIbcuVy4eFvLUXaN5Tr",
  ONE_TIME_MSC: "price_1ROgqjIbcuVy4eFvpNjAtVJ1",
  ONE_TIME_3MSC: "price_1ROgqjIbcuVy4eFvURCFwZeC",
};

const stripePromise = loadStripe(
  "pk_live_51R6F1BIbcuVy4eFvReGUnFek7mrUSQVdB36HVakroHUVXXvlo37ipn4t6jZLcMoixYrnJlysFZOPocevrA0mOoBd0002tTd4fs"
);

const URL = "https://api.autoclicker.pl";

export const subscribeHTTP = async (user, priceId, isTrial, mode) => {
  const modeS = mode === "oneTime" ? "payment" : "subscription";
  try {
    const res = await axios.post(
      `${URL}/create-checkout-session`,
      {
        uid: user.uid,
        email: user.email,
        priceId,
        mode: modeS,
        isTrial: isTrial,
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
        const priceIdFromUser = response.data.user.subscription.priceId;
        const isOneTimePurchase =
          priceIdFromUser === pricesTypes.ONE_TIME_MSC ||
          priceIdFromUser === pricesTypes.ONE_TIME_3MSC;
        if (
          priceIdFromUser === pricesTypes.GOLD_MONTH ||
          priceIdFromUser === pricesTypes.GOLD_YEAR ||
          isOneTimePurchase
        ) {
          return {
            ...response.data.user,
            subscription: {
              ...response.data.user.subscription,
              dateEnd: new Date(response.data.user.subscription.expiresAt),
              type: premiumTypes.GOLD,
            },
          };
        } else if (
          response.data.user.subscription.priceId ===
            pricesTypes.BUSSINESS_GOLD_MONTH ||
          response.data.user.subscription.priceId ===
            pricesTypes.BUSSINESS_GOLD_YEAR
        ) {
          return {
            ...response.data.user,
            subscription: {
              ...response.data.user.subscription,
              dateEnd: new Date(response.data.user.subscription.expiresAt),
              type: premiumTypes.BUSSINESS_GOLD,
            },
          };
        } else {
          return {
            ...response.data.user,
            subscription: {
              ...response.data.user.subscription,
              dateEnd: new Date(response.data.user.subscription.expiresAt),
              type: premiumTypes.BASIC,
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
