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
      " Dostęp do wersji Basic",
      " Większa szybkość klikania",
      " Ograniczony czas klikania 10min x 4razy",
      " Ograniczona ilość kliknięć w ciągu dnia 4razy",
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
      " Większa szybkość klikania",
      " Priorytetowe wsparcie techniczne",
      " Brak ograniczeń",
    ],
    priceId: "price_1RAW3PIbcuVy4eFvUfuw3k1M",
    bestValue: true,
    isActualSub: null,
    showMode: "month",
  },
  {
    duration: "1 Miesiąc",
    type: "Premium Bussiness",
    price: 249.99,
    description: [
      "Pełen dostęp do wersji premium",
      "Większa ilość zapisanych przeglądarek",
      "Najlepsza oszczędność",
      "Ekskluzywne aktualizacje i bonusy",
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
      " Wszystkie funkcje basic przez cały rok",
      " Ograniczony czas klikania 10min x 4razy",
      " Ograniczona ilość kliknięć w ciągu dnia 4razy",
    ],
    priceId: "price_1RAW3UIbcuVy4eFvLUXaN5Tr",
    bestValue: false,
    isActualSub: null,
    showMode: "year",
  },
  {
    duration: "1 Rok",
    type: "Premium",
    price: 589.99,
    description: [
      " Wszystkie funkcje premium przez cały rok",
      " Najlepsza oszczędność",
      " Ekskluzywne aktualizacje i bonusy",
    ],
    priceId: "price_1RAW3PIbcuVy4eFvEuoXUGvr",
    bestValue: true,
    isActualSub: null,
    showMode: "year",
  },
  {
    duration: "1 Rok",
    type: "Premium Bussiness",
    price: 2699,
    description: [
      "Wszystkie funkcje premium przez cały rok",
      "Większa ilość zapisanych przeglądarek",
      "Najlepsza oszczędność",
      "Ekskluzywne aktualizacje i bonusy",
    ],
    priceId: "price_1RAW3JIbcuVy4eFvRsN5Yvt0",
    bestValue: false,
    isActualSub: null,
    showMode: "year",
  },
];

const Subscription = ({ fromHome }) => {
  const [dialog, setDialog] = useState({
    open: false,
    title: "",
    description: "",
    callAccept: () => {},
  });

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
          Rodzaj Subskrypcji
        </div>
        <div
          className="switches"
          style={{ boxShadow: "0px 0px 2px oklch(0.792 0.209 151.711)" }}
        >
          <div className="switches--btn">
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
          <div className="switches--btn">
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
