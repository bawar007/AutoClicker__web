import { FaBolt, FaBrain, FaCogs, FaGamepad } from "react-icons/fa";
import "./HomePage.scss";
import Subscription from "../components/Subscription/Subscriptions";
import homeAnimation from "../assets/HomeAnimattion.json";
import Lottie from "lottie-react";
// import { useContext } from "react";
// import { AuthContext } from "../context/auth-context";

export default function HomePage() {
  // const authCtx = useContext(AuthContext);
  return (
    <div className="home--wrapper">
      <section
        className="bg-gray-900 home--wrapper__headerSection"
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
      <div style={{ width: "100%" }}>
        <Subscription fromHome={true} />
      </div>
      {/* {authCtx.currentUserInfo && authCtx.currentUser ? (
        <stripe-pricing-table
          pricing-table-id="prctbl_1R8gekIbb7FrsP92oTIHQt7D"
          publishable-key="pk_test_51R6F1LIbb7FrsP92jdPrswDqHy7pBrwENP9kXnkD3NBsh04cyir7aOIW4HHGWiVGhMjerqP4IpQaRs3A0AoG1pDk00OSaNltrV"
          className="w-full h-full"
          style={{ marginTop: "50px" }}
          customer-email={authCtx.currentUser.email}
          customer-session-client-secret={
            authCtx.currentUserInfo.userInfo.clientSecret
          }
        ></stripe-pricing-table>
      ) : null}
      {console.log(authCtx.currentUser.email)} */}
    </div>
  );
}

function FeatureCard({ icon, title, description, extraText }) {
  return (
    <div
      className="flex flex-col items-center bg-gray-800 p-6 rounded-2xl shadow-lg text-center features--section__item"
      style={{ boxShadow: "0px 0px 10px black" }}
    >
      <div className="text-green-400 mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2 text-lg">{description}</p>
      <p className="text-gray-300 mt-2">{extraText}</p>
    </div>
  );
}
