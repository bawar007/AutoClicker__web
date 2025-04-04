import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Circle } from "@mui/icons-material";

export default function FaqPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Najczęściej zadawane pytania
      </Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#1976d2", color: "white" }}
        >
          Jak użwać Auto-Clickera?
        </AccordionSummary>
        <AccordionDetails>
          <Circle fontSize="inherit" />
          To nic prostszego! Wystarczy, że wejdziesz na stronę ebrama i
          wejdziesz w edycję awaizacji, Auto-Clicker pojawi się w prawym dolnym
          rogu ekranu.
        </AccordionDetails>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Następnie wystaczy kliknąć w wybrany
          slot który nas interesuje{" "}
          {`"Pamiętać trzeba, że sloty muszą być z tego
          samego dnia"`}
          .
          <img src="/icons/addSlot.png" alt="id pluginu" width="300px" />
        </AccordionDetails>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Później kliknij w przycisk start i ciesz
          się wolnym czasem {`;)`}
          <img src="/icons/working.png" alt="id pluginu" width="200px" />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#1976d2", color: "white" }}
        >
          Czy plugin działa na każdej stronie?
        </AccordionSummary>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Plugin może nie działać poprawnie na
          stronach z zaawansowaną ochroną przed botami. Aktualnie działa tylko
          na jednej stronie.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#1976d2", color: "white" }}
        >
          Jak aktywować wersję premium?
        </AccordionSummary>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Wersję premium można aktywować po
          zalogowaniu się i zakupieniu wybranego pakietu na stronie{" "}
          <a href="https://autoclicker.pl" style={{ color: "blue" }}>
            autoclicker.pl
          </a>
          .
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#1976d2", color: "white" }}
        >
          Na ilu urządzeniach mogę używać wersji premium?
        </AccordionSummary>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Jeśli posiadasz pakiet Premium lub
          Basic, wersja premium może być używana maksymalnie na dwóch
          przeglądarkach jednocześnie.
        </AccordionDetails>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Jeśli posiadasz pakiet Premium
          Bussienss, wersja premium może być używana maksymalnie na dwóch
          przeglądarkach jednocześnie.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#1976d2", color: "white" }}
        >
          Jak dodać plugin do swojego konta?
        </AccordionSummary>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Jeśli posiadasz wykupiony pakiet możesz
          zrobić to w swoim panelu użytkownika. Pod tym linkiem{" "}
          <a href="https://autoclicker.pl/panel" style={{ color: "blue" }}>
            panel
          </a>
        </AccordionDetails>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Po zalogowaniu się do swojego konta,
          przejdź do sekcji "Tokeny". Tam skopiuj kod wyświetlający się w
          pluginie i wklej go w odpowiednie pole. Po zapisaniu zmian plugin
          powinien działać.
        </AccordionDetails>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Id pluginu znajdziesz tutaj
          <img src="/icons/idInfo.png" alt="id pluginu" width="300px" />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#1976d2", color: "white" }}
        >
          Czy mogę edytować subskrypcję lub ją usunąć?
        </AccordionSummary>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Tak możesz to zrobić ze swojego panelu
          gdzie zostaniesz przekierowany do usługodawcy który zarządza
          subskrypcjami
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#1976d2", color: "white" }}
        >
          Czy subskrypcja odnawia się automatycznie?
        </AccordionSummary>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Tak, subskrypcja odnawia się
          automatycznie co miesiąc lub co rok. Możesz to zmienić w swoim panelu
          użytkownika.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#1976d2", color: "white" }}
        >
          Czy mogę korzystać z pluginu po anulowaniu subskrypcji?
        </AccordionSummary>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Tak, możesz korzystać z pluginu do końca
          okresu rozliczeniowego. Po tym czasie plugin przestanie działać.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          style={{ backgroundColor: "#1976d2", color: "white" }}
        >
          Wszedłem na stronę i nie widzię pluginu, co zrobić?
        </AccordionSummary>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Jeśli nie widzisz pluginu prawdopodomnie
          nie wszedłeś na właściwą stronę. Plugin działa tylko na stronie
          ebrama. Jeśli dalej nie widzisz pluginu, spróbuj odświeżyć stronę lub
          wyczyścić pamięć podręczną przeglądarki. Możesz również spróbować
          zainstalować plugin ponownie. Upewnij się również , że masz włączoną
          wersję premium oraz że plugin jest aktywowany na Twoim koncie. Jeśli
          problem nadal występuje, skontaktuj się z nami przez formularz
          kontaktowy.
        </AccordionDetails>
        <AccordionDetails>
          <Circle fontSize="inherit" /> Pamiętać trzeba, że content pluginu
          pojawi się tylko po wejściu w edycję awizacji
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
