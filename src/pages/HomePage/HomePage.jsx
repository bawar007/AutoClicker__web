import { FaBolt, FaBrain, FaCogs, FaGamepad } from "react-icons/fa";
import "./HomePage.scss";
import Subscription from "../../components/Subscription/Subscriptions";
import homeAnimation from "../../assets/HomeAnimattion.json";
import Lottie from "lottie-react";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
// import { useContext } from "react";
// import { AuthContext } from "../context/auth-context";

export default function HomePage() {
  // const authCtx = useContext(AuthContext);
  return (
    <div className="home--wrapper">
      <section
        className="bg-gray-900 home--wrapper__headerSection animate-fade-right"
        style={{ boxShadow: "0px 0px 10px black" }}
      >
        <h1
          className="text-5xl font-extrabold text-green-400 leading-tight "
          style={{ marginBottom: "20px" }}
        >
          Zautomatyzuj Klikanie i Pracuj Lepiej !
        </h1>
        <Lottie
          animationData={homeAnimation}
          style={{ width: "100%", height: "250px" }}
          loop
          wmode="transparent"
          autoplay
        />
        <p
          className="mt-4 text-3xl text-green-300 "
          style={{ marginBottom: "10px", marginTop: "20px" }}
        >
          Masz dość siedzenia przed ekranem i spedzania wielu godzin na klikaniu
          ?
        </p>
        <p className="mt-4 text-lg text-gray-300 max-w-4xl">
          O to on AutoClicker narzędzie, które pozwala Ci zoptymalizować swoją
          prace, klikając za Ciebie w odpowiednich momentach. Dzięki niemu
          oszczędzisz bardzo dużo czasu, który możesz przeznaczyć na SIEBIE !!!
        </p>

        {/* <Button
          color="info"
          variant="contained"
          style={{ marginTop: "20px" }}
          size="large"
          onClick={() => {
            window.open(
              "https://chromewebstore.google.com/category/extensions?utm_source=ext_sidebar&hl=pl",
              "_target"
            );
          }}
        >
          Zainstaluj już teraz
        </Button> */}
      </section>
      {/* Features Section */}
      <section className="features--section">
        <FeatureCard
          icon={<FaBolt size={50} />}
          title="Automatyczne Klikanie"
          description="Oszczędzaj czas, pozwól AutoClickerowi klikać za Ciebie!"
          extraText="✔ Dzięki tej funkcji możesz cieszyć się automatycznym klikaniem w kluczowych momentach, co daje Ci więcej czasu na skupienie się na innych aspektach swojej pracy oraz bezpieczniejszą pracę."
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
      <div style={{ width: "100%" }}>
        <Subscription fromHome={true} />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, extraText }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true); // Ustawiamy na true tylko raz
          observer.disconnect(); // Przestajemy obserwować
        }
      },
      { threshold: 0.1 } // 30% elementu musi być widoczne
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg text-center features--section__item ${
        hasAnimated && "animate-fade-right "
      }`}
      style={{ boxShadow: "0px 0px 10px black" }}
      ref={ref}
    >
      <div className="text-green-400 mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2 text-lg">{description}</p>
      <p className="text-gray-300 mt-2">{extraText}</p>
    </div>
  );
}
