import { FaBolt, FaBrain, FaCogs, FaGamepad } from "react-icons/fa";
import "./HomePage.scss";
import Subscription from "../components/Subscription/Subscriptions";

export default function HomePage() {
  return (
    <div className="home--wrapper">
      {/* Hero Section */}
      <section className="bg-gray-900 home--wrapper__headerSection">
        <h1
          className="text-5xl font-extrabold text-green-400 leading-tight "
          style={{ marginBottom: "20px" }}
        >
          Zautomatyzuj Klikanie i Pracuj Lepiej !
        </h1>
        <p
          className="mt-4 text-3xl text-green-300 "
          style={{ marginBottom: "10px" }}
        >
          Masz dość siedzenia przed ekranem i spedzania wielu godzin na klikaniu
          ?
        </p>
        <p className="mt-4 text-lg text-gray-300 max-w-4xl">
          O to on AutoClicker to narzędzie, które pozwala Ci zoptymalizować
          swoją prace, klikając za Ciebie w odpowiednich momentach. Dzięki niemu
          oszczędzisz bardzo dużo czasu, który możesz przeznaczyć na SIEBIE !!!
        </p>
      </section>

      {/* Features Section */}
      <section className="features--section">
        <FeatureCard
          icon={<FaBolt size={50} />}
          title="Automatyczne Klikanie"
          description="Oszczędzaj czas, pozwól AutoClickerowi klikać za Ciebie!"
          extraText="✔ Dzięki tej funkcji możesz cieszyć się automatycznym klikaniem w kluczowych momentach, co daje Ci więcej czasu na skupienie się na innych aspektach swojej pracy oraz bezpiecznijszą pracę."
        />
        <FeatureCard
          icon={<FaCogs size={50} />}
          title="Łatwa Konfiguracja"
          description="Szybko dostosuj ustawienia do swoich potrzeb."
          extraText="✔ Prosty interfejs użytkownika pozwala na łatwą konfigurację, dzięki czemu już po chwili możesz w pełni korzystać z AutoClickera bez zbędnych komplikacji."
        />
        <FeatureCard
          icon={<FaBrain size={50} />}
          title="Szybsza i Efektywniejsza Praca"
          description="Zyskaj przewagę nad innymi!"
          extraText="✔ AutoClicker poprawia Twoją wydajność w pracy, zapewniając szybsze reakcje."
        />
      </section>

      {/* Pricing Section */}
      <section
        className="flex flex-col lg:flex-row gap-8 max-w-5xl w-full py-16 items-center"
        style={{ alignItems: "stretch" }}
      >
        <Subscription
          duration="1 Miesiąc"
          type="Basic"
          price={9.99}
          description={[
            "✔ Dostęp do wersji Basic",
            "✔ Większa szybkość klikania",
            "✔ Ograniczony czas klikania",
            "✔ Ograniczona ilość kliknięć w ciągu dnia",
          ]}
          priceId="price_1R6rc0IbcuVy4eFvDaV64ZcP"
        />
        <Subscription
          duration="1 Miesiąc"
          type="Premium"
          price={49.99}
          description={[
            "✔ Pełen dostęp do wersji premium",
            "✔ Większa szybkość klikania",
            "✔ Priorytetowe wsparcie techniczne",
            "✔ Brak ograniczeń",
          ]}
          priceId="price_1R6F7OIbb7FrsP92yS6tHXQg"
        />
        {/* priceId="price_1R6rcqIbcuVy4eFvFk0jO4tc" */}
        <Subscription
          duration="1 Rok"
          type="Premium"
          price={549.99}
          description={[
            "✔ 11msc + 1 msc GRATIS !!!",
            "✔ Wszystkie funkcje premium przez cały rok",
            "✔ Najlepsza oszczędność",
            "✔ Ekskluzywne aktualizacje i bonusy",
          ]}
          priceId="price_1R6rdiIbcuVy4eFvL2AA5FVA"
          bestValue
        />
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, extraText }) {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg text-center features--section__item">
      <div className="text-green-400 mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2 text-lg">{description}</p>
      <p className="text-gray-300 mt-2">{extraText}</p>
    </div>
  );
}
