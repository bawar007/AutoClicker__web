import "./Regulamin.scss";

const Regulamin = () => {
  return (
    <div className="regulamin--wrapper">
      <h2>Regulamin korzystania z AutoClicker</h2>
      <h3>§1 Postanowienia ogólne</h3>
      <ol>
        <li>
          Niniejszy regulamin określa zasady korzystania ze strony internetowej
          oraz wtyczki AutoClicker (dalej „AutoClicker” lub „Usługa”).
        </li>
        <li>
          <span>
            Właścicielem i administratorem Usługi jest Kamil Barski (dalej
            „Administrator”).
          </span>
        </li>
        <li>
          <span>
            Korzystanie z AutoClicker oznacza akceptację niniejszego regulaminu.
          </span>
        </li>
      </ol>

      <h3>§2 Opis Usługi</h3>
      <ol>
        <li>
          <span>
            AutoClicker to wtyczka umożliwiająca użytkownikowi automatyczne
            klikanie w dowolnie wybrane sloty.
          </span>
        </li>
        <li>
          <span>
            Pełny dostęp do funkcji AutoClicker jest możliwy po wykupieniu
            subskrypcji.
          </span>
        </li>
        <li>
          <span>
            Strona internetowa AutoClicker umożliwia użytkownikom zakup
            subskrypcji poprzez Stripe oraz zarządzanie licencjami.
          </span>
        </li>
      </ol>

      <h3> §3 Warunki korzystania</h3>
      <ol>
        <li>
          <span>
            Użytkownik zobowiązuje się do korzystania z AutoClicker zgodnie z
            obowiązującym prawem.
          </span>
        </li>
        <li>
          <span>
            Korzystanie z AutoClicker w sposób niezgodny z regulaminem danej
            platformy lub aplikacji, w której jest używany, odbywa się na ryzyko
            użytkownika.
          </span>
        </li>
        <li>
          <span>
            Administrator nie ponosi odpowiedzialności za skutki korzystania z
            AutoClicker.
          </span>
        </li>
      </ol>

      <h3>§4 Subskrypcja i płatności</h3>
      <ol>
        <li>
          <span>
            Subskrypcja AutoClicker jest realizowana za pośrednictwem Stripe.
          </span>
        </li>
        <li>
          <span>
            Użytkownik może wykupić subskrypcję na okres 1 miesiąca lub 1 roku.
          </span>
        </li>
        <li>
          <span>
            Płatności są automatycznie odnawiane, chyba że użytkownik anuluje
            subskrypcję przed zakończeniem okresu rozliczeniowego.
          </span>
        </li>
        <li>
          <span>
            Administrator zastrzega sobie prawo do zmiany cen subskrypcji.
          </span>
        </li>
      </ol>

      <h3>§5 Reklamacje i zwroty</h3>
      <ol>
        <li>
          <span>
            Użytkownik ma prawo zgłosić reklamację dotyczącą działania Usługi
            poprzez kontakt e-mailowy: [Twój e-mail].
          </span>
        </li>
        <li>
          <span>
            Zwroty są możliwe jedynie w uzasadnionych przypadkach i rozpatrywane
            indywidualnie.
          </span>
        </li>
      </ol>

      <h3>§6 Odpowiedzialność</h3>
      <ol>
        <li>
          <span>
            Administrator nie ponosi odpowiedzialności za nieprawidłowe
            działanie AutoClicker wynikające z błędów technicznych lub zmian w
            polityce platform, na których jest używany.
          </span>
        </li>
        <li>
          <span>
            Użytkownik ponosi pełną odpowiedzialność za sposób korzystania z
            AutoClicker.
          </span>
        </li>
      </ol>

      <h3>§7 Postanowienia końcowe</h3>
      <ol>
        <li>
          <span>Administrator zastrzega sobie prawo do zmiany regulaminu.</span>
        </li>
        <li>
          <span>
            Wszelkie spory będą rozstrzygane zgodnie z prawem obowiązującym w
            jurysdykcji siedziby Administratora.
          </span>
        </li>
      </ol>
    </div>
  );
};

export default Regulamin;
