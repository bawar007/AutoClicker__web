import "./PolitykaPrywatnosci.scss";

const PolitykaPrywatnosci = () => {
  return (
    <div className="regulamin--wrapper">
      <h2>Polityka Prywatności AutoClicker</h2>

      <h3>§1 Postanowienia ogólne</h3>
      <ol>
        <li>
          Niniejsza Polityka Prywatności określa, jakie dane są zbierane, w jaki
          sposób są przetwarzane i jakie prawa przysługują użytkownikom
          AutoClicker.
        </li>
        <li>
          <span>Administratorem danych osobowych jest Kamil Barski.</span>
        </li>
      </ol>

      <h3>§2 Zakres zbieranych danych</h3>
      <ol>
        <li>
          <span>
            W ramach korzystania z AutoClicker zbierane są następujące dane:
          </span>
          <ul>
            <li>
              Adres e-mail użytkownika (przy rejestracji i logowaniu przez
              Firebase).
            </li>
            <li>Identyfikator przeglądarki (w celu autoryzacji licencji).</li>
            <li>
              Informacje o statusie subskrypcji (za pośrednictwem Stripe).
            </li>
          </ul>
        </li>
        <li>
          <span>
            Dane te są wykorzystywane wyłącznie do świadczenia Usługi i
            zarządzania subskrypcjami.
          </span>
        </li>
      </ol>

      <h3> §3 Cel przetwarzania danych</h3>
      <ol>
        <li>
          <span>Dane osobowe użytkowników są przetwarzane w celu:</span>
          <ul>
            <li>Umożliwienia logowania i dostępu do panelu użytkownika.</li>
            <li>Weryfikacji licencji i dostępu do wersji premium.</li>
            <li>Obsługi płatności i subskrypcji.</li>
          </ul>
        </li>
        <li>
          <span>
            AutoClicker łączy się z bezpiecznym serwerem API w celu sprawdzenia
            statusu subskrypcji i autoryzacji przeglądarki. Komunikacja z
            backendem odbywa się wyłącznie w celu pobrania danych, a nie
            wykonywania jakiegokolwiek zdalnego kodu.
          </span>
        </li>
      </ol>

      <h3>§4 Udostępnianie danych</h3>
      <ol>
        <li>
          <span>
            Administrator nie sprzedaje ani nie udostępnia danych osobowych
            osobom trzecim, z wyjątkiem:
          </span>
          <ul>
            <li>Stripe – w celu przetwarzania płatności.</li>
            <li>Firebase – w celu uwierzytelniania użytkowników.</li>
            <li>Organów ścigania – jeśli wymagają tego przepisy prawa.</li>
          </ul>
        </li>
      </ol>

      <h3>§5 Prawa użytkowników</h3>
      <ol>
        <li>
          <span>Użytkownik ma prawo do:</span>
          <ul>
            <li>Wglądu do swoich danych.</li>
            <li>Żądania ich poprawienia lub usunięcia.</li>
            <li>
              Wycofania zgody na przetwarzanie danych (co może skutkować brakiem
              dostępu do AutoClicker).
            </li>
          </ul>
        </li>
        <li>
          <span>
            Wszelkie żądania dotyczące danych można zgłaszać na adres: [Twój
            e-mail].
          </span>
        </li>
      </ol>

      <h3>§6 Przechowywanie danych</h3>
      <ol>
        <li>
          <span>
            Dane użytkowników są przechowywane tak długo, jak jest to konieczne
            do świadczenia Usługi.
          </span>
        </li>
        <li>
          <span>
            Po zakończeniu subskrypcji użytkownik może zażądać usunięcia swojego
            konta i powiązanych danych.
          </span>
        </li>
      </ol>

      <h3>§7 Zgodność z wymaganiami Google</h3>
      <ol>
        <li>
          <span>
            Rozszerzenie AutoClicker nie wykonuje żadnego zdalnego kodu
            JavaScript pobranego z internetu. Wszystkie funkcje są realizowane
            wyłącznie z wykorzystaniem lokalnych skryptów zawartych w pakiecie
            rozszerzenia.
          </span>
        </li>
        <li>
          <span>
            Komunikacja z zewnętrznymi usługami (takimi jak API backendu)
            ogranicza się do pobierania danych niezbędnych do funkcjonowania
            aplikacji (np. status subskrypcji) i nie zawiera żadnych poleceń do
            wykonania.
          </span>
        </li>
      </ol>

      <h3>§8 Zmiany polityki prywatności</h3>
      <ol>
        <li>
          <span>
            Administrator zastrzega sobie prawo do zmiany niniejszej Polityki
            Prywatności.
          </span>
        </li>
        <li>
          <span>
            Użytkownicy zostaną poinformowani o zmianach na stronie AutoClicker.
          </span>
        </li>
      </ol>
    </div>
  );
};

export default PolitykaPrywatnosci;
