import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import {
  subscribeHTTP,
  updateSubscription,
} from "../../utils/subscriptionHTTP";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const Subscription = () => {
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    description: "",
    callAccept: () => {},
  });

  let subsVersions = [
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
      priceId: "price_1R8gXDIbb7FrsP92DN8Vzi6Y",
      bestValue: false,
      isActualSub: null,
      showMode: "month",
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
      priceId: "price_1R8gYqIbb7FrsP92WbLj8sf1",
      bestValue: true,
      isActualSub: null,
      showMode: "month",
    },
    {
      duration: "1 Rok",
      type: "Basic",
      price: 89.99,
      description: [
        "✔ 11msc + 1 msc GRATIS !!!",
        "✔ Wszystkie funkcje basic przez cały rok",
        "✔ Ograniczony czas klikania",
        "✔ Ograniczona ilość kliknięć w ciągu dnia",
      ],
      priceId: "price_1R8gYLIbb7FrsP92ffiNjNiS",
      bestValue: false,
      isActualSub: null,
      showMode: "year",
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
      priceId: "price_1R8gZEIbb7FrsP92TxwOZ4rV",
      bestValue: true,
      isActualSub: null,
      showMode: "year",
    },
  ];

  const [itemsToShow, setItemsToShow] = useState(
    subsVersions.filter((item) => item.showMode === "month")
  );

  const authCtx = useContext(AuthContext);

  const handleClickOpenSubscription = (priceId, isMyBought) => {
    const userHaveSub = authCtx.currentUserInfo.userInfo.subscription;

    if (userHaveSub) {
      setDialog((prev) => ({
        ...prev,
        open: true,
        title: "Subskrypcja",
        description: "Już posiadasz subskrypcje. Czy chcesz ją zmienić ?",
        callAccept: () => {
          window.open(
            "https://billing.stripe.com/p/login/test_8wM5mV5ka2bAdm8000",
            "_blank"
          );
          handleClose();
        },
      }));
    } else {
      handleSubscribe(priceId, isMyBought);
    }
  };

  const handleClose = () => {
    setDialog((prev) => ({
      ...prev,
      open: false,
      title: "",
      description: "",
      callAccept: () => {},
    }));
  };

  const handleSwitchItems = (mode) => {
    const newItems = subsVersions.filter((item) => item.showMode === mode);
    setItemsToShow(newItems);
    const itemRemoveActive = document.querySelector(".item--active");
    itemRemoveActive.classList.remove("item--active");
    const itemAddActive = document.querySelector(`.item--${mode}`);
    itemAddActive.classList.add("item--active");
  };

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
      await updateSubscription(priceId, user);
      const t = authCtx.currentUserInfo.userInfo;
      if (t.subscription) {
        const newTab = [];
        subsVersions.forEach((item) => {
          if (item.priceId === t.subscription.priceId) {
            newTab.push({ ...item, isActualSub: true });
          } else newTab.push({ ...item, isActualSub: false });
        });

        subsVersions = newTab;
      } else {
        const newTab = [];
        subsVersions.forEach((item) => {
          newTab.push({ ...item, isActualSub: null });
        });
        subsVersions = newTab;
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    const getInfo = async () => {
      const t = authCtx.currentUserInfo.userInfo;

      if (t.subscription) {
        const newTab = [];
        subsVersions.forEach((item) => {
          if (item.priceId === t.subscription.priceId) {
            newTab.push({ ...item, isActualSub: true });
          } else newTab.push({ ...item, isActualSub: false });
        });
        subsVersions = newTab;
      } else {
        const newTab = [];
        subsVersions.forEach((item) => {
          newTab.push({ ...item, isActualSub: null });
        });
        subsVersions = newTab;
      }
    };
    getInfo();
  }, [authCtx.currentUserInfo]);

  return (
    <section
      className="flex flex-col lg:flex-row gap-8 max-w-5xl  py-16 items-center"
      style={{
        alignItems: "stretch",
        marginBottom: "20px",
        maxWidth: "none",
        width: "90%",
        flexWrap: "wrap",
      }}
    >
      <Dialog open={dialog.open}>
        <DialogTitle id="alert-dialog-title">{dialog.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialog.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialog.callAccept}>ZGODA</Button>
          <Button onClick={handleClose} autoFocus>
            ODRZUĆ
          </Button>
        </DialogActions>
      </Dialog>
      <div className="switchSub">
        <div className="switches">
          <div>
            <Button
              onClick={() => {
                handleSwitchItems("month", "item--year");
              }}
              className="item--month item--active"
              variant="text"
            >
              Co miesiąc
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                handleSwitchItems("year", "item--month");
              }}
              className="item--year"
              variant="text"
            >
              Co rok
            </Button>
          </div>
        </div>
      </div>
      <div className="subs--hub">
        {itemsToShow.map((subscription, index) => (
          <div
            key={`sub-${index}`}
            className={`p-6 rounded-2xl shadow-lg  text-center ${
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
              width: "40%",

              boxShadow: "0px 0px 10px black",
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
                handleClickOpenSubscription(
                  subscription.priceId,
                  subscription.isActualSub
                )
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
      </div>
    </section>
  );
};

export default Subscription;
