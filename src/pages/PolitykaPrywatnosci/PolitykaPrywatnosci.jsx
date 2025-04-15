import "./PolitykaPrywatnosci.scss";

const PolitykaPrywatnosci = () => {
  return (
    <div className="regulamin--wrapper">
      <h2>Polityka Prywatności AutoClicker</h2>

      <h3>§1 Postanowienia ogólne</h3>
      <ol>
        <li>
          Polityka Prywatności określa zasady przetwarzania danych użytkowników
          korzystających z rozszerzenia AutoClicker.
        </li>
        <li>Administratorem danych osobowych jest Kamil Barski.</li>
        <li>
          Rozszerzenie działa wyłącznie w obrębie witryny{" "}
          <strong>ebrama.baltichub.com</strong>.
        </li>
      </ol>

      <h3>§2 Zakres zbieranych danych</h3>
      <ol>
        <li>
          AutoClicker przetwarza jedynie niezbędne dane do świadczenia usług:
        </li>
        <ul>
          <li>
            Adres e-mail użytkownika (tylko podczas logowania przez Firebase).
          </li>
          <li>
            Wygenerowany identyfikator przeglądarki (służący do weryfikacji
            licencji premium).
          </li>
          <li>Status subskrypcji, uzyskany z systemu Stripe.</li>
        </ul>
        <li>
          Dane te nie są udostępniane ani sprzedawane osobom trzecim, poza
          niezbędnymi podmiotami wskazanymi w §4.
        </li>
      </ol>

      <h3>§3 Cel przetwarzania danych</h3>
      <ol>
        <li>Dane przetwarzane są wyłącznie w celu:</li>
        <ul>
          <li>umożliwienia logowania i dostępu do panelu użytkownika,</li>
          <li>weryfikacji licencji i przypisania wersji premium,</li>
          <li>zarządzania płatnościami i subskrypcją.</li>
        </ul>
        <li>
          Komunikacja z backendem (https://api.autoclicker.pl) odbywa się
          jedynie w celu weryfikacji aktywności licencji, bez przekazywania
          danych wrażliwych.
        </li>
      </ol>

      <h3>§4 Udostępnianie danych</h3>
      <ol>
        <li>
          Dane są udostępniane tylko następującym usługom, niezbędnym do
          działania aplikacji:
        </li>
        <ul>
          <li>Stripe – w celu realizacji płatności,</li>
          <li>
            Firebase – do uwierzytelniania użytkowników i przechowywania
            identyfikatorów,
          </li>
          <li>
            Organy ścigania – wyłącznie w przypadkach wymaganych przez przepisy
            prawa.
          </li>
        </ul>
      </ol>

      <h3>§5 Prawa użytkowników</h3>
      <ol>
        <li>Każdy użytkownik ma prawo do:</li>
        <ul>
          <li>wglądu w swoje dane,</li>
          <li>żądania ich poprawienia lub usunięcia,</li>
          <li>
            wycofania zgody na ich przetwarzanie (co może skutkować utratą
            dostępu do usług premium).
          </li>
        </ul>
        <li>
          Wszelkie wnioski można zgłaszać na adres:{" "}
          <strong>trafficthreats@gmail.com</strong>.
        </li>
      </ol>

      <h3>§6 Przechowywanie danych</h3>
      <ol>
        <li>
          Dane są przechowywane przez okres korzystania z usługi, a po
          zakończeniu subskrypcji mogą zostać usunięte na żądanie użytkownika.
        </li>
      </ol>

      <h3>§7 Zgodność z wymaganiami Google</h3>
      <ol>
        <li>
          Rozszerzenie nie wykonuje żadnego zdalnego ani dynamicznie pobieranego
          kodu JavaScript. Wszystkie skrypty są częścią pakietu instalacyjnego i
          działają lokalnie.
        </li>
        <li>
          Rozszerzenie nie służy do omijania zabezpieczeń ani wykonywania
          ukrytych operacji na stronach internetowych.
        </li>
        <li>
          AutoClicker działa wyłącznie na stronie
          <strong>ebrama.baltichub.com</strong>, a jego funkcje aktywowane są
          wyłącznie przez użytkownika.
        </li>
        <li>
          Komunikacja z backendem odbywa się przez bezpieczne połączenie HTTPS i
          dotyczy jedynie statusu subskrypcji.
        </li>
      </ol>

      <h3>§8 Bezpieczeństwo</h3>
      <ol>
        <li>
          Dane są przechowywane w bezpieczny sposób w usłudze Firebase oraz
          lokalnie na urządzeniu użytkownika (przy użyciu
          `chrome.storage.local`).
        </li>
        <li>
          AutoClicker nie uzyskuje dostępu do danych prywatnych użytkownika
          przeglądarki ani historii przeglądania.
        </li>
      </ol>

      <h3>§9 Zmiany Polityki Prywatności</h3>
      <ol>
        <li>
          Administrator zastrzega sobie prawo do zmian niniejszej Polityki
          Prywatności.
        </li>
        <li>
          Użytkownicy zostaną poinformowani o zmianach na stronie internetowej
          AutoClicker.
        </li>
      </ol>
    </div>
  );
};

export default PolitykaPrywatnosci;
