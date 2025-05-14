import { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import SubscriptionItem from "./SubscriptionItem";

const subsVersions = [
  {
    duration: "1 Miesiąc",
    type: "Basic",
    price: 9.99,
    description: [
      "Dostęp do wersji Basic",
      "Zwiększona szybkość klikania",
      "Ograniczony czas klikania: 10 minut, 4 razy dziennie",
      "Limit kliknięć: 4 sesje dziennie",
    ],
    priceId: "price_1RAW3UIbcuVy4eFvi3TA1H2i",
    bestValue: false,
    isActualSub: null,
    showMode: "month",
  },
  {
    duration: "1 Miesiąc",
    type: "Premium",
    price: 49.99,
    description: [
      " Pełen dostęp do wersji premium",
      " Zwiększona szybkość klikania",
      " Priorytetowe wsparcie techniczne",
      " Brak ograniczeń czasowych i ilości klinięć",
    ],
    priceId: "price_1RAW3PIbcuVy4eFvUfuw3k1M",
    bestValue: true,
    isActualSub: null,
    showMode: "month",
  },
  {
    duration: "1 Miesiąc",
    type: "Premium Business",
    price: 249.99,
    description: [
      "Pełen dostęp do wersji premium",
      "Możliwość dodania większej liczby przeglądarek",
      "Ekskluzywne aktualizacje i bonusy",
      "Najlepsza oszczędność przy większej skali działania",
    ],
    priceId: "price_1RAW3JIbcuVy4eFvie55hisK",
    bestValue: false,
    isActualSub: null,
    showMode: "month",
  },
  {
    duration: "1 Rok",
    type: "Basic",
    price: 89.99,
    description: [
      " Wszystkie funkcje wersji Basic przez cały rok",
      " Ograniczony czas klikania: 10 minut, 4 razy dziennie",
      " Limit kliknięć: 4 sesje dziennie",
    ],
    priceId: "price_1RAW3UIbcuVy4eFvLUXaN5Tr",
    bestValue: false,
    isActualSub: null,
    showMode: "year",
  },
  {
    duration: "1 Rok",
    type: "Premium",
    price: 479.99,
    description: [
      " Wszystkie funkcje Premium przez cały rok",
      " Ekskluzywne aktualizacje i bonusy",
      " Najlepsza oszczędność w długim okresie",
    ],
    priceId: "price_1REB1GIbcuVy4eFvXnUzyt3q",
    bestValue: true,
    isActualSub: null,
    showMode: "year",
  },
  {
    duration: "1 Rok",
    type: "Premium Business",
    price: 2699,
    description: [
      " Pełen dostęp do wersji Premium przez cały rok",
      " Możliwość dodania większej liczby przeglądarek",
      " Ekskluzywne aktualizacje i bonusy",
      " Najlepsza opcja dla firm i zespołów",
    ],
    priceId: "price_1RAW3JIbcuVy4eFvRsN5Yvt0",
    bestValue: false,
    isActualSub: null,
    showMode: "year",
  },
  {
    duration: "1 Miesiąc",
    type: "Premium 1-msc",
    price: 49.99,
    description: [
      " Pełen dostęp do wersji Premium przez cały rok",
      " Możliwość dodania większej liczby przeglądarek",
      " Ekskluzywne aktualizacje i bonusy",
      " Najlepsza opcja dla firm i zespołów",
    ],
    priceId: "price_1ROj5mIbcuVy4eFvOvsZ6Ixt",
    bestValue: false,
    isActualSub: null,
    showMode: "oneTime",
  },
  {
    duration: "3 Miesiące",
    type: "Premium 3-msc",
    price: 149.99,
    description: [
      " Pełen dostęp do wersji Premium przez cały rok",
      " Możliwość dodania większej liczby przeglądarek",
      " Ekskluzywne aktualizacje i bonusy",
      " Najlepsza opcja dla firm i zespołów",
    ],
    priceId: "price_1ROgqjIbcuVy4eFvURCFwZeC",
    bestValue: true,
    isActualSub: null,
    showMode: "oneTime",
  },
];

const Subscription = ({ fromHome }) => {
  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    description: "",
    callAccept: () => {},
  });

  const [showOneTime, setShowOneTime] = useState(false);

  const [itemsToShow, setItemsToShow] = useState(
    subsVersions.filter((item) => item.showMode === "month")
  );

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

  return (
    <section
      className="flex flex-col lg:flex-row gap-8  items-center sub--section"
      style={{
        width: fromHome ? "100%" : "90%",
        marginTop: fromHome ? "0px" : "50px",
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
        <div className="switches--text text-5xl font-extrabold text-green-400 leading-tight">
          Wybierz Rodzaj
          <div className="switches--text--sub">
            <span
              onClick={() => {
                setShowOneTime(false);
                handleSwitchItems("month");
              }}
              className={!showOneTime ? "active" : ""}
            >
              Subskrypcja
            </span>
            <span
              onClick={() => {
                setShowOneTime(true);
                handleSwitchItems("oneTime");
              }}
              className={showOneTime ? "active" : ""}
            >
              Jednorazowo
            </span>
          </div>
        </div>
        {showOneTime ? null : (
          <div
            className="switches"
            style={{ boxShadow: "0px 0px 2px oklch(0.792 0.209 151.711)" }}
          >
            <div className="switches--btn">
              <Button
                onClick={() => {
                  handleSwitchItems("month");
                }}
                className="item--month item--active"
                variant="text"
              >
                Co miesiąc
              </Button>
            </div>
            <div className="switches--btn">
              <Button
                onClick={() => {
                  handleSwitchItems("year");
                }}
                className="item--year"
                variant="text"
              >
                Co rok
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="subs--hub" style={fromHome ? { width: "90%" } : {}}>
        {itemsToShow.map((subscription, index) => (
          <SubscriptionItem
            subscription={subscription}
            key={`item-${index}`}
            setDialog={setDialog}
          />
        ))}
      </div>
    </section>
  );
};

export default Subscription;

{
  /* <div className="switches--btn btn--oneTime">
<Button
  onClick={() => {
    handleSwitchItems("oneTime");
  }}
  className="item--oneTime"
  variant="text"
>
  Jednorazowo
</Button>
</div> */
}
