import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import {
  getUserInfo,
  subscribeHTTP,
  updateSubscription,
} from "../../utils/subscriptionHTTP";

const Subscription = () => {
  const [loading, setLoading] = useState(false);
  const [subsVersions, setSubsVersions] = useState([
    {
      duration: "1 Miesiąc",
      type: "Basic",
      price: 9.99,
      description: [
        "✔ Dostęp do wersji Basic",
        "✔ Większa szybkość klikania",
        "✔ Ograniczony czas klikania",
        "✔ Ograniczona ilość kliknięć w ciągu dnia",
      ],
      priceId: "price_1R7JpYIbb7FrsP92FFq7WQEz",
      bestValue: false,
      isActualSub: null,
    },
    {
      duration: "1 Miesiąc",
      type: "Premium",
      price: 49.99,
      description: [
        "✔ Pełen dostęp do wersji premium",
        "✔ Większa szybkość klikania",
        "✔ Priorytetowe wsparcie techniczne",
        "✔ Brak ograniczeń",
      ],
      priceId: "price_1R6F7OIbb7FrsP92LBlgrxsR",
      bestValue: false,
      isActualSub: null,
    },
    {
      duration: "1 Rok",
      type: "Premium",
      price: 549.99,
      description: [
        "✔ 11msc + 1 msc GRATIS !!!",
        "✔ Wszystkie funkcje premium przez cały rok",
        "✔ Najlepsza oszczędność",
        "✔ Ekskluzywne aktualizacje i bonusy",
      ],
      priceId: "price_1R6F7OIbb7FrsP92yS6tHXQg",
      bestValue: true,
      isActualSub: null,
    },
  ]);

  const authCtx = useContext(AuthContext);

  const handleSubscribe = async (priceId, isMyBought) => {
    setLoading(true);
    const user = authCtx.currentUser;

    if (!user) {
      alert("Musisz się zalogować");
      setLoading(false);
      return;
    }

    if (isMyBought === null) {
      await subscribeHTTP(user, priceId);
    } else if (!isMyBought) {
      let result = confirm(
        "Już posiadasz subskrypcje. Jeśli się zgodzisz zostanie ona automatycznie zakończona i zostanie rozpoczęta nowa."
      );
      if (result) {
        await updateSubscription(priceId, user);
        const t = await getUserInfo(authCtx.currentUser.uid);
        if (t.subscription) {
          const newTab = [];
          subsVersions.forEach((item) => {
            if (item.priceId === t.subscription.priceId) {
              newTab.push({ ...item, isActualSub: true });
            } else newTab.push({ ...item, isActualSub: false });
          });

          setSubsVersions(newTab);
        } else {
          const newTab = [];
          subsVersions.forEach((item) => {
            newTab.push({ ...item, isActualSub: null });
          });
          setSubsVersions(newTab);
        }
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    const getInfo = async () => {
      const t = await getUserInfo(authCtx.currentUser.uid);
      if (t.subscription) {
        const newTab = [];
        subsVersions.forEach((item) => {
          if (item.priceId === t.subscription.priceId) {
            newTab.push({ ...item, isActualSub: true });
          } else newTab.push({ ...item, isActualSub: false });
        });

        setSubsVersions(newTab);
      } else {
        const newTab = [];
        subsVersions.forEach((item) => {
          newTab.push({ ...item, isActualSub: null });
        });
        setSubsVersions(newTab);
      }
    };
    getInfo();
  }, [authCtx.currentUser]);

  return (
    <section
      className="flex flex-col lg:flex-row gap-8 max-w-5xl w-full py-16 items-center"
      style={{ alignItems: "stretch" }}
    >
      {subsVersions.map((subscription) => (
        <div
          className={`p-6 rounded-2xl shadow-lg w-full text-center ${
            subscription.bestValue
              ? "border-2 border-green-400 bg-gray-800"
              : "bg-gray-900"
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
          <h3 className="text-4xl font-bold text-green-400">
            {subscription.duration}
          </h3>
          <h2 className="text-2xl font-bold text-green-400">
            {subscription.type}
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="text-2xl font-semibold text-white mt-2">
              {subscription.price}zł
            </p>
            {subscription.price === 549.99 && (
              <span style={{ color: "gray", fontSize: "12px" }}>
                To {parseInt(subscription.price / 12)}zł/msc oszczędzasz{" "}
                {parseInt(49.99 * 12 - subscription.price)}zł
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
            {subscription.description.map((item, index) => (
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
            className={` ${
              subscription.isBought === null
                ? "hover:pointer hover:bg-orange-600 bg-orange-500"
                : subscription.isActualSub
                ? "bg-orange-300"
                : "hover:pointer hover:bg-orange-600 bg-orange-500"
            }  px-6 text-xlg py-2 rounded-lg text-white font-semibold shadow-md`}
            style={{
              width: "70%",
              padding: "10px",
            }}
            onClick={() =>
              handleSubscribe(subscription.priceId, subscription.isActualSub)
            }
            disabled={
              subscription.isActualSub === null
                ? false
                : subscription.isActualSub
                ? true
                : false
            }
          >
            {loading
              ? "Ładowanie..."
              : subscription.isActualSub === null
              ? "Kup Teraz"
              : !subscription.isActualSub
              ? "Zmień plan"
              : "Aktywna"}
          </button>
        </div>
      ))}
    </section>
  );
};

export default Subscription;
