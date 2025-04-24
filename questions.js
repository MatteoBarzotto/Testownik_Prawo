const questions = [
  {
    "question": "Czym jest norma prawna?",
    "options": [
      "To przepis prawa zawarty w ustawie.",
      "To jednostka redakcyjna aktu normatywnego.",
      "To reguła postępowania, ustanowiona przez państwo, zabezpieczona sankcją.",
      "To zbiór ustaw obowiązujących w danym państwie."
    ],
    "answer": 2
  },
  {
    "question": "Czym jest system prawa?",
    "options": [
      "To zbiór obowiązujących przepisów i zwyczajów.",
      "To uporządkowany i wewnętrznie spójny zbiór norm prawnych.",
      "To wszystkie sądy i organy państwowe stosujące prawo.",
      "To ogół przepisów dotyczących postępowania cywilnego i karnego."
    ],
    "answer": 1
  },
  {
    "question": "Który z poniższych aktów ma najwyższą moc prawną w Polsce?",
    "options": [
      "Ustawa zwykła.",
      "Rozporządzenie.",
      "Konstytucja RP.",
      "Kodeks cywilny."
    ],
    "answer": 2
  },
  {
    "question": "Który z poniższych elementów NIE należy do definicji przedsiębiorstwa z Kodeksu cywilnego?",
    "options": [
      "Nieruchomości i ruchomości.",
      "Tajemnica przedsiębiorstwa.",
      "Strategia marketingowa.",
      "Prawa wynikające z umów najmu."
    ],
    "answer": 2
  },
  {
    "question": "Czym jest tajemnica przedsiębiorstwa?",
    "options": [
      "Informacje publicznie dostępne w Internecie.",
      "Każda informacja o działalności firmy.",
      "Informacje o wartości gospodarczej, nieujawnione, chronione przez przedsiębiorcę.",
      "Dane finansowe firmy złożone w urzędzie skarbowym."
    ],
    "answer": 2
  },
  {
    "question": "Co to jest czyn nieuczciwej konkurencji?",
    "options": [
      "Działanie zgodne z prawem, ale niemoralne.",
      "Działanie sprzeczne z prawem lub dobrymi obyczajami, zagrażające interesowi innego przedsiębiorcy.",
      "Zachowanie etyczne, ale nielegalne.",
      "Działanie zgodne z interesem klienta, ale niezgodne z ustawą."
    ],
    "answer": 1
  },
  {
    "question": "Które z poniższych NIE jest przykładem czynu nieuczciwej konkurencji?",
    "options": [
      "Wprowadzające w błąd oznaczenie towaru.",
      "Przekupstwo urzędnika.",
      "Wydłużenie terminu płatności do 30 dni.",
      "Organizowanie systemu sprzedaży lawinowej."
    ],
    "answer": 2
  },
  {
    "question": "Czym jest RODO?",
    "options": [
      "Rozporządzeniem UE o ochronie danych osobowych.",
      "Polską ustawą o e-commerce.",
      "Dyrektywą dotyczącą bezpieczeństwa systemów informatycznych.",
      "Systemem monitorowania ruchu sieciowego."
    ],
    "answer": 0
  },
  {
    "question": "Które dane osobowe należą do kategorii szczególnych (wrażliwych)?",
    "options": [
      "Imię i nazwisko.",
      "Adres zamieszkania.",
      "Dane biometryczne, zdrowotne, orientacja seksualna.",
      "Numer PESEL."
    ],
    "answer": 2
  },
  {
    "question": "Kiedy można przetwarzać dane wrażliwe według RODO?",
    "options": [
      "Tylko gdy zostały one już kiedyś upublicznione.",
      "Tylko po zgodzie osoby, której dane dotyczą, lub w innych wyjątkach z art. 9 RODO.",
      "Zawsze, gdy są potrzebne do prowadzenia działalności gospodarczej.",
      "Nigdy – ich przetwarzanie jest zakazane."
    ],
    "answer": 1
  },
  {
    "question": "Które z poniższych stanowi przykład cyberzagrożenia?",
    "options": [
      "Trollowanie i flaming.",
      "Udostępnienie plików firmowych pracownikowi.",
      "Aktualizacja systemu operacyjnego.",
      "Przesyłanie dokumentów przez e-mail."
    ],
    "answer": 0
  },
  {
    "question": "Czym jest cyberstalking?",
    "options": [
      "Atakiem DDoS na serwer rządowy.",
      "Złośliwym nękaniem osoby przez systemy informatyczne.",
      "Tworzeniem kont fałszywych w mediach społecznościowych.",
      "Monitorowaniem ruchu w sieci przez administratora."
    ],
    "answer": 1
  },
  {
    "question": "Czym zajmuje się Strategia Cyberbezpieczeństwa RP?",
    "options": [
      "Reguluje obowiązki obywateli w zakresie ochrony danych.",
      "Wskazuje cele, środki i działania dla odporności na cyberzagrożenia.",
      "Zawiera przepisy karne dotyczące przestępstw internetowych.",
      "Określa sposób zawierania umów w sieci."
    ],
    "answer": 1
  },
  {
    "question": "Która z poniższych definicji najlepiej opisuje usługę cyfrową?",
    "options": [
      "Usługa świadczona fizycznie w siedzibie firmy.",
      "Usługa świadczona elektronicznie na odległość na żądanie odbiorcy.",
      "Usługa telekomunikacyjna z wykorzystaniem linii kablowej.",
      "Usługa związana z obsługą kasową lub fiskalną."
    ],
    "answer": 1
  },
  {
    "question": "Kim są operatorzy usług kluczowych (OUK)?",
    "options": [
      "Firmy dostarczające usługi publiczne niezależnie od ich znaczenia.",
      "Podmioty wskazane przez ministra, mające wpływ na bezpieczeństwo państwa.",
      "Wszyscy dostawcy usług cyfrowych w Polsce.",
      "Podmioty zagraniczne świadczące usługi przez Internet."
    ],
    "answer": 1
  },
  {
    "question": "Co to jest infrastruktura krytyczna?",
    "options": [
      "System zabezpieczeń wewnętrznych w firmie.",
      "Budynki o charakterze zabytkowym.",
      "Instalacje i systemy mające kluczowe znaczenie dla funkcjonowania państwa.",
      "Każda sieć komputerowa w sektorze prywatnym."
    ],
    "answer": 2
  },
  {
    "question": "Kto jest administracją publiczną?",
    "options": [
      "Każdy obywatel RP.",
      "Organy i struktury wykonujące bieżące zadania państwa i samorządu.",
      "Podmioty prywatne wykonujące zadania na rzecz państwa.",
      "Instytucje międzynarodowe."
    ],
    "answer": 1
  },
  {
    "question": "Co reguluje ustawa o ochronie danych osobowych z 2018 roku?",
    "options": [
      "Wprowadza RODO do polskiego porządku prawnego i określa szczegóły jego stosowania.",
      "Reguluje zasady cyberbezpieczeństwa.",
      "Dotyczy przetwarzania danych w systemach informatycznych wojska.",
      "Dotyczy tylko danych finansowych przedsiębiorstw."
    ],
    "answer": 0
  },
  {
    "question": "Do czego służą umowy NDA (non-disclosure agreements)?",
    "options": [
      "Do zawarcia porozumienia o współpracy IT.",
      "Do zapewnienia ochrony danych osobowych.",
      "Do zobowiązania stron do zachowania poufności informacji.",
      "Do ustanawiania relacji B2B między programistami."
    ],
    "answer": 2
  },
  {
    "question": "Które zabezpieczenie jest fizyczne?",
    "options": [
      "Szyfrowanie danych.",
      "Zamek do drzwi i monitoring.",
      "Hasło do systemu.",
      "Uprawnienia administracyjne."
    ],
    "answer": 1
  },
  {
    "question": "Które z poniższych zachowań najlepiej opisuje 'flaming'?",
    "options": [
      "Przekazywanie informacji osobom nieupoważnionym.",
      "Publiczne krytykowanie firmy w artykułach prasowych.",
      "Zaognianie dyskusji w sieci w celu wywołania agresji uczestników.",
      "Wysyłanie maili bez zgody odbiorcy."
    ],
    "answer": 2
  },
  {
    "question": "Czym jest 'grooming' w kontekście cyberzagrożeń?",
    "options": [
      "Złośliwe komentowanie zdjęć w mediach społecznościowych.",
      "Namawianie dziecka w sieci do działań seksualnych lub produkcji treści pornograficznych.",
      "Hakerstwo oparte na metodach socjotechnicznych.",
      "Zbieranie informacji o użytkownikach przez pliki cookie."
    ],
    "answer": 1
  },
  {
    "question": "Jakie informacje mogą być tajemnicą przedsiębiorstwa?",
    "options": [
      "Wyniki badań rynku, strategie reklamowe.",
      "Informacje ogólnodostępne na stronie firmy.",
      "Treść ogłoszenia o pracę.",
      "Zawartość ogólnych warunków umowy (OWU)."
    ],
    "answer": 0
  },
  {
    "question": "Czym jest umowa wdrożeniowa IT?",
    "options": [
      "Umowa o stworzenie grafiki komputerowej.",
      "Umowa o dostawę sprzętu biurowego.",
      "Umowa na opracowanie, dostarczenie i uruchomienie systemu IT u klienta.",
      "Umowa o dzieło w zakresie działań promocyjnych w sieci."
    ],
    "answer": 2
  },
  {
    "question": "Które z poniższych NIE jest celem umowy utrzymaniowej IT?",
    "options": [
      "Zapewnienie działania systemu IT.",
      "Wsparcie techniczne po wdrożeniu.",
      "Rozbudowa funkcjonalności systemu.",
      "Aktualizacja i usuwanie błędów."
    ],
    "answer": 2
  },
  {
    "question": "W jakich sytuacjach można stosować szyfrowanie danych w firmie?",
    "options": [
      "Zawsze – to forma zabezpieczenia technicznego.",
      "Tylko przy udostępnianiu danych organom państwowym.",
      "Wyłącznie w kontaktach z klientem indywidualnym.",
      "Tylko jeśli wymagają tego przepisy podatkowe."
    ],
    "answer": 0
  },
  {
    "question": "Co to jest 'Internet rzeczy' (IoT)?",
    "options": [
      "Nowy standard sieci teleinformatycznej.",
      "Zbiór serwisów WWW działających offline.",
      "Sieć urządzeń połączonych przez Internet, które komunikują się i przetwarzają dane.",
      "Sieć komputerowa ograniczona do jednego budynku."
    ],
    "answer": 2
  },
  {
    "question": "Która z umów najlepiej opisuje relację SaaS?",
    "options": [
      "Dzierżawa infrastruktury sprzętowej.",
      "Licencja na użytkowanie oprogramowania lokalnego.",
      "Dostęp do aplikacji przez Internet w modelu abonamentowym.",
      "Usługa serwisowa offline świadczona przez informatyka."
    ],
    "answer": 2
  },
  {
    "question": "Czym różni się AI od klasycznego algorytmu?",
    "options": [
      "AI to jedynie inna nazwa algorytmu.",
      "AI potrafi się uczyć i podejmować decyzje na podstawie danych.",
      "Algorytm klasyczny jest bardziej inteligentny niż AI.",
      "Nie ma różnicy – oba służą do przetwarzania danych."
    ],
    "answer": 1
  },
  {
    "question": "Jaka zasada odpowiada za rozliczalność w RODO?",
    "options": [
      "Prawo do bycia zapomnianym.",
      "Minimalizacja danych.",
      "Ograniczenie celu.",
      "Administrator musi móc wykazać zgodność z przepisami."
    ],
    "answer": 3
  },
  {
    "question": "Co oznacza zasada 'privacy by design'?",
    "options": [
      "Ochrona prywatności po wdrożeniu systemu.",
      "Zapewnienie prywatności już na etapie projektowania systemu.",
      "Oddzielenie danych prywatnych od firmowych.",
      "Projektowanie systemów bez wykorzystania danych osobowych."
    ],
    "answer": 1
  },
  {
    "question": "Która instytucja w Polsce nadzoruje ochronę danych osobowych?",
    "options": [
      "Urząd Komunikacji Elektronicznej.",
      "Urząd Ochrony Konkurencji i Konsumentów.",
      "Generalny Inspektor Informacji Finansowej.",
      "Prezes Urzędu Ochrony Danych Osobowych (PUODO)."
    ],
    "answer": 3
  },
  {
    "question": "Czym są dane biometryczne według RODO?",
    "options": [
      "Dane dotyczące pochodzenia etnicznego.",
      "Dane kontaktowe osoby fizycznej.",
      "Dane umożliwiające jednoznaczną identyfikację osoby na podstawie cech fizycznych.",
      "Dane związane z historią zatrudnienia."
    ],
    "answer": 2
  },
  {
    "question": "Który z przepisów zawiera definicję przedsiębiorstwa?",
    "options": [
      "Art. 55¹ Kodeksu cywilnego.",
      "Art. 1 RODO.",
      "Art. 9 Kodeksu pracy.",
      "Art. 1 ustawy o ochronie danych osobowych."
    ],
    "answer": 0
  },
  {
    "question": "Co to jest EULA?",
    "options": [
      "Rodzaj licencji dla użytkownika końcowego oprogramowania.",
      "Rodzaj protokołu szyfrowania danych.",
      "Ustawa o cyberbezpieczeństwie.",
      "Regulamin sklepu internetowego."
    ],
    "answer": 0
  },
  {
    "question": "Która z zasad ochrony danych oznacza ograniczenie celu?",
    "options": [
      "Dane zbierane wyłącznie w konkretnym, prawnie uzasadnionym celu.",
      "Dane przetwarzane tylko z ważnego powodu handlowego.",
      "Dane mogą być wykorzystywane do celów marketingowych.",
      "Dane można przechowywać dowolnie długo."
    ],
    "answer": 0
  },
  {
    "question": "Które z poniższych nie jest przewidziane przez ustawę o zwalczaniu nieuczciwej konkurencji?",
    "options": [
      "Naśladownictwo produktów.",
      "Zawarcie umowy o pracę bez zgody urzędu.",
      "Pomawianie i nieuczciwe zachwalanie.",
      "Fałszywe oznaczenie pochodzenia towaru."
    ],
    "answer": 1
  },
  {
    "question": "Czym jest system sprzedaży lawinowej?",
    "options": [
      "System polegający na bezpośrednim kontakcie z klientem końcowym.",
      "System sprzedaży sieciowej bez organizacji konsorcjum.",
      "Nielegalny system zachęcający do pozyskiwania nowych uczestników w zamian za prowizję.",
      "Model sprzedaży hurtowej w sieciach franczyzowych."
    ],
    "answer": 2
  },
  {
    "question": "Czym różni się 'privacy by design' od 'privacy by default'?",
    "options": [
      "Design – ochrona na etapie projektu, Default – domyślne ustawienia ochrony.",
      "Design dotyczy marketingu, Default to produkcja.",
      "Design to kwestia prawa, Default to etyka.",
      "Nie ma różnicy – to ten sam termin."
    ],
    "answer": 0
  },
  {
    "question": "Czym zajmuje się administrator danych osobowych?",
    "options": [
      "Zbieraniem i przetwarzaniem danych w imieniu klienta.",
      "Decydowaniem o celach i środkach przetwarzania danych osobowych.",
      "Tworzeniem aplikacji gromadzących dane.",
      "Analizą danych dla potrzeb marketingowych."
    ],
    "answer": 1
  },
  {
    "question": "Jaka jest odpowiedzialność cywilna za szkody wyrządzone przez sztuczną inteligencję?",
    "options": [
      "Odpowiedzialność AI jako podmiotu prawa.",
      "Brak odpowiedzialności – AI nie jest stroną prawną.",
      "Odpowiedzialność spada na twórcę lub użytkownika systemu.",
      "Wyłącznie odpowiedzialność Skarbu Państwa."
    ],
    "answer": 2
  },
  {
    "question": "Kiedy administrator danych może powierzyć ich przetwarzanie innemu podmiotowi?",
    "options": [
      "Zawsze, gdy ten podmiot jest firmą IT.",
      "Jeśli uzyska zgodę organu nadzorczego.",
      "Gdy zapewni odpowiednie gwarancje zgodności z RODO.",
      "Tylko jeśli dane są zanonimizowane."
    ],
    "answer": 2
  },
  {
    "question": "Czym różni się umowa outsourcingowa IT od umowy licencyjnej?",
    "options": [
      "Licencja dotyczy usług, outsourcing sprzętu.",
      "Outsourcing to przejęcie obowiązków IT przez firmę zewnętrzną, licencja to zgoda na użycie oprogramowania.",
      "Licencja jest zawsze bezterminowa, outsourcing – tymczasowy.",
      "Obie umowy dotyczą tego samego rodzaju świadczenia."
    ],
    "answer": 1
  },
  {
    "question": "Co określa umowa SLA (Service Level Agreement)?",
    "options": [
      "Zasady przetwarzania danych w systemach IT.",
      "Minimalny poziom usług świadczonych przez dostawcę.",
      "Prawa autorskie do kodu źródłowego.",
      "Zasady działania serwisu internetowego."
    ],
    "answer": 1
  },
  {
    "question": "Który z podmiotów NIE może być administratorem danych osobowych?",
    "options": [
      "Osoba fizyczna prowadząca jednoosobową działalność.",
      "Organ administracji publicznej.",
      "Osoba prawna.",
      "Program komputerowy zarządzany przez AI."
    ],
    "answer": 3
  },
  {
    "question": "Czym jest know-how w kontekście ochrony prawnej?",
    "options": [
      "Oprogramowanie open-source.",
      "Informacje techniczne, handlowe, które nie zostały opatentowane, ale mają wartość gospodarczą.",
      "Patent zgłoszony w Urzędzie Patentowym.",
      "Każda wiedza uzyskana podczas szkoleń pracowniczych."
    ],
    "answer": 1
  },
  {
    "question": "Która z form ochrony prawnej dotyczy wyglądu produktu?",
    "options": [
      "Wzór przemysłowy.",
      "Patent.",
      "Znak towarowy.",
      "Prawo autorskie."
    ],
    "answer": 0
  },
  {
    "question": "Czym jest patent?",
    "options": [
      "Prawo do posługiwania się nazwą firmy.",
      "Wyłączne prawo do korzystania z wynalazku przez określony czas.",
      "Zbiór procedur marketingowych.",
      "Licencja na używanie systemu komputerowego."
    ],
    "answer": 1
  },
  {
    "question": "Który element NIE podlega ochronie prawnoautorskiej?",
    "options": [
      "Struktura kodu źródłowego programu.",
      "Logo firmy jako element oprogramowania.",
      "Funkcjonalność programu jako idea.",
      "Opis tekstowy interfejsu użytkownika."
    ],
    "answer": 2
  },
  {
    "question": "Co to jest umowa B2B w kontekście IT?",
    "options": [
      "Umowa zawierana z klientem indywidualnym.",
      "Umowa pomiędzy dwoma firmami na świadczenie usług, np. programistycznych.",
      "Umowa licencyjna na oprogramowanie do użytku domowego.",
      "Regulamin świadczenia usług online."
    ],
    "answer": 1
  },
  {
    "question": "Kiedy możemy mówić o odpowiedzialności karnej za przetwarzanie danych?",
    "options": [
      "Gdy przetwarzanie narusza obowiązujące przepisy, np. bez zgody osoby.",
      "Tylko jeśli osoba pokrzywdzona złoży zawiadomienie.",
      "Tylko w przypadku firm zagranicznych.",
      "Gdy dane są przechowywane powyżej 5 lat."
    ],
    "answer": 0
  },
  {
    "question": "Które narzędzie NIE jest technicznym środkiem ochrony danych?",
    "options": [
      "Hasło dostępu.",
      "Zapora sieciowa (firewall).",
      "Procedura rekrutacyjna.",
      "Szyfrowanie dysku."
    ],
    "answer": 2
  },
  {
    "question": "Co może być przedmiotem prawa autorskiego w kontekście IT?",
    "options": [
      "Wyłącznie gotowy program komputerowy.",
      "Każda dokumentacja projektowa i kod programu.",
      "Tylko elementy graficzne interfejsu.",
      "Jedynie algorytmy jako idee."
    ],
    "answer": 1
  },
  {
    "question": "Co oznacza rejestracja wzoru przemysłowego?",
    "options": [
      "Zabezpieczenie wynalazku o unikalnej funkcjonalności.",
      "Uzyskanie prawa ochrony wyglądu produktu na rynku.",
      "Zgłoszenie patentu do urzędu UE.",
      "Rejestracja znaku towarowego w urzędzie."
    ],
    "answer": 1
  },
  {
    "question": "Która z poniższych NIE jest formą ochrony własności intelektualnej?",
    "options": [
      "Patent.",
      "Know-how.",
      "Wzór użytkowy.",
      "Cyberbezpieczeństwo systemu."
    ],
    "answer": 3
  },
  {
    "question": "W jakich warunkach możliwe jest opatentowanie wynalazku?",
    "options": [
      "Musi być nowy, mieć poziom wynalazczy i nadawać się do przemysłowego stosowania.",
      "Powinien być funkcjonalny i estetyczny.",
      "Dotyczyć tylko IT lub farmacji.",
      "Musi być zarejestrowany w Polsce i UE jednocześnie."
    ],
    "answer": 0
  },
  {
    "question": "Który z przykładów NIE wymaga zgody na przetwarzanie danych osobowych?",
    "options": [
      "Wysyłanie ofert marketingowych e-mailem.",
      "Rekrutacja pracowników.",
      "Wystawienie faktury zgodnie z przepisami.",
      "Wysyłka newslettera do klientów."
    ],
    "answer": 2
  },
  {
    "question": "Czy program komputerowy można opatentować w UE?",
    "options": [
      "Tak, bez żadnych ograniczeń.",
      "Nie, programy nie podlegają ochronie.",
      "Tylko jeśli zawierają techniczne rozwiązanie.",
      "Tylko jako kod źródłowy i tylko w Polsce."
    ],
    "answer": 2
  },
  {
    "question": "Które z poniższych zachowań NIE podlega odpowiedzialności cywilnej?",
    "options": [
      "Nieprawidłowe wykonanie umowy wdrożeniowej.",
      "Złamanie zasad RODO przy rekrutacji.",
      "Kradzież danych z użyciem złośliwego oprogramowania.",
      "Zbyt wolna reakcja helpdesku na zgłoszenie klienta."
    ],
    "answer": 3
  },
  {
    "question": "Jaka forma licencji umożliwia użytkownikowi modyfikację i rozpowszechnianie programu?",
    "options": [
      "Licencja zamknięta.",
      "Licencja open-source.",
      "Licencja shareware.",
      "Licencja komercyjna."
    ],
    "answer": 1
  },
  {
    "question": "Jakie jest znaczenie zasady 'minimalizacji danych' w RODO?",
    "options": [
      "Dane powinny być przechowywane maksymalnie długo.",
      "Dane powinny być adekwatne, stosowne i ograniczone do niezbędnych celów.",
      "Dane powinny być publiczne i dostępne dla administracji.",
      "Dane mogą być zbierane wyłącznie w formie papierowej."
    ],
    "answer": 1
  },
  {
    "question": "Kiedy można legalnie przetwarzać dane osobowe bez zgody osoby?",
    "options": [
      "Zawsze, jeśli dane są już opublikowane.",
      "Gdy przetwarzanie jest niezbędne do wykonania umowy lub obowiązku prawnego.",
      "Tylko za pisemną zgodą urzędu.",
      "Jeśli dane dotyczą osoby prawnej."
    ],
    "answer": 1
  },
  {
    "question": "Które z poniższych NIE jest cechą normy prawnej?",
    "options": [
      "Generalność.",
      "Abstrakcyjność.",
      "Indywidualność.",
      "Sankcjonowanie."
    ],
    "answer": 2
  },
  {
    "question": "Który z elementów NIE jest częścią składową systemu prawa?",
    "options": [
      "Normy prawne.",
      "Zasady moralne.",
      "Gałęzie prawa.",
      "Instytucje prawne."
    ],
    "answer": 1
  },
  {
    "question": "Który przykład najlepiej ilustruje zasadę legalności?",
    "options": [
      "Działanie organu tylko na podstawie i w granicach prawa.",
      "Dowolne działanie władzy publicznej.",
      "Prawo stanowione przez obywateli.",
      "Działanie sądu zgodnie z regulaminem wewnętrznym."
    ],
    "answer": 0
  },
  {
    "question": "Co oznacza zasada proporcjonalności w ochronie danych?",
    "options": [
      "Zbieranie maksymalnie dużej ilości danych.",
      "Użycie tylko takich danych, jakie są niezbędne do celu przetwarzania.",
      "Możliwość swobodnego wykorzystania danych w marketingu.",
      "Zbieranie danych tylko za granicą."
    ],
    "answer": 1
  },
  {
    "question": "Kto pełni funkcję organu nadzorczego RODO w Polsce?",
    "options": [
      "Prezes Urzędu Ochrony Konkurencji i Konsumentów.",
      "Generalny Inspektor Danych Publicznych.",
      "Prezes Urzędu Ochrony Danych Osobowych.",
      "Minister Cyfryzacji."
    ],
    "answer": 2
  },
  {
    "question": "Co oznacza zasada 'integralności i poufności' w RODO?",
    "options": [
      "Dane muszą być jawne dla wszystkich użytkowników systemu.",
      "Dane powinny być zabezpieczone przed nieuprawnionym dostępem i utratą.",
      "Dane mogą być kopiowane i udostępniane bez ograniczeń.",
      "Dane powinny być zapisywane tylko w formie papierowej."
    ],
    "answer": 1
  },
  {
    "question": "Który z poniższych przypadków wymaga przeprowadzenia oceny skutków dla ochrony danych (DPIA)?",
    "options": [
      "Zbieranie adresów e-mail do newslettera.",
      "Przetwarzanie danych biometrycznych na dużą skalę.",
      "Zbieranie danych do umowy cywilnoprawnej.",
      "Zarządzanie listą obecności w firmie."
    ],
    "answer": 1
  },
  {
    "question": "Które dane są przykładem danych wrażliwych?",
    "options": [
      "Imię i nazwisko.",
      "Adres e-mail.",
      "Dane dotyczące zdrowia lub przekonań religijnych.",
      "Numer telefonu."
    ],
    "answer": 2
  },
  {
    "question": "Który z dokumentów zawiera opis sposobu ochrony danych w systemie?",
    "options": [
      "Polityka bezpieczeństwa informacji.",
      "Kodeks pracy.",
      "Ustawa o działalności gospodarczej.",
      "Uchwała zarządu spółki."
    ],
    "answer": 0
  },
  {
    "question": "Co to jest naruszenie ochrony danych osobowych?",
    "options": [
      "Zgłoszenie klienta o nieścisłości w umowie.",
      "Zgubienie danych lub dostęp do nich przez osobę nieupoważnioną.",
      "Brak aktualizacji hasła do systemu.",
      "Usunięcie konta użytkownika na jego żądanie."
    ],
    "answer": 1
  },
  {
    "question": "Jakie prawo przysługuje osobie fizycznej w związku z przetwarzaniem jej danych?",
    "options": [
      "Prawo do dostępu do danych.",
      "Prawo do ich sprzedaży innemu podmiotowi.",
      "Prawo do modyfikacji systemu IT administratora.",
      "Prawo do tworzenia kopii zapasowych."
    ],
    "answer": 0
  },
  {
    "question": "Który przykład jest przykładem przetwarzania danych osobowych?",
    "options": [
      "Zgubienie pendrive’a z danymi klientów.",
      "Wypełnienie formularza kontaktowego przez klienta.",
      "Wydrukowanie oferty reklamowej.",
      "Wysyłanie SMS-ów z promocjami."
    ],
    "answer": 1
  },
  {
    "question": "Czym jest pseudonimizacja danych?",
    "options": [
      "Całkowite usunięcie danych z systemu.",
      "Zastąpienie danych osobowych tak, aby nie można było ich przypisać bez dodatkowych informacji.",
      "Szyfrowanie danych w systemach operacyjnych.",
      "Zastąpienie imienia i nazwiska numerem klienta."
    ],
    "answer": 1
  },
  {
    "question": "Który z poniższych przykładów NIE jest zgodny z zasadą przejrzystości RODO?",
    "options": [
      "Informowanie użytkownika o celach przetwarzania danych.",
      "Brak klauzuli informacyjnej przy zbieraniu danych.",
      "Zamieszczenie polityki prywatności na stronie.",
      "Udostępnienie kontaktu do administratora danych."
    ],
    "answer": 1
  },
  {
    "question": "Czym jest rejestr czynności przetwarzania danych?",
    "options": [
      "Rejestr zatrudnienia w firmie.",
      "Zestawienie systemów komputerowych.",
      "Dokument opisujący wszystkie operacje na danych osobowych.",
      "Rejestr zezwoleń na przetwarzanie danych."
    ],
    "answer": 2
  },
  {
    "question": "Czym jest zgoda na przetwarzanie danych?",
    "options": [
      "Zgoda wyrażona przez kliknięcie linku.",
      "Dobrowolne, konkretne, świadome i jednoznaczne okazanie woli.",
      "Warunek zatrudnienia pracownika.",
      "Domniemanie zgody przez korzystanie z systemu."
    ],
    "answer": 1
  },
  {
    "question": "Kto odpowiada za naruszenie ochrony danych w firmie?",
    "options": [
      "Administrator danych.",
      "Urząd skarbowy.",
      "Osoba, której dane dotyczą.",
      "Inspektor ochrony danych wyłącznie."
    ],
    "answer": 0
  },
  {
    "question": "Jak długo można przechowywać dane osobowe?",
    "options": [
      "Do końca istnienia firmy.",
      "Zawsze przez 10 lat.",
      "Tak długo, jak jest to niezbędne do celów, w których są przetwarzane.",
      "Bezterminowo, jeśli są zarchiwizowane."
    ],
    "answer": 2
  },
  {
    "question": "Co oznacza zasada 'rozliczalności' w RODO?",
    "options": [
      "Administrator musi prowadzić rozliczenia księgowe.",
      "Administrator musi móc wykazać zgodność z przepisami RODO.",
      "Administrator musi przechowywać dane przez 10 lat.",
      "Administrator ma obowiązek raportowania danych do PUODO co miesiąc."
    ],
    "answer": 1
  },
  {
    "question": "Czym jest zgoda osoby, której dane dotyczą?",
    "options": [
      "Zgoda wyrażona w domyślnych ustawieniach przeglądarki.",
      "Wyraźne działanie potwierdzające, wyrażone dobrowolnie, świadomie i jednoznacznie.",
      "Automatyczne zatwierdzenie regulaminu.",
      "Podpisanie umowy cywilnej."
    ],
    "answer": 1
  },
  {
    "question": "Który dokument określa prawa osoby, której dane są przetwarzane?",
    "options": [
      "Kodeks cywilny.",
      "Polityka prywatności.",
      "RODO.",
      "Ustawa o działalności gospodarczej."
    ],
    "answer": 2
  },
  {
    "question": "Które dane osobowe mogą być przetwarzane bez zgody w celu wykonania umowy?",
    "options": [
      "Numer PESEL, adres, dane kontaktowe.",
      "Dane biometryczne.",
      "Przekonania polityczne.",
      "Dane o stanie zdrowia."
    ],
    "answer": 0
  },
  {
    "question": "Kiedy wymagane jest powołanie Inspektora Ochrony Danych (IOD)?",
    "options": [
      "Zawsze, gdy firma zatrudnia powyżej 20 osób.",
      "Gdy przetwarzanie danych stanowi główną działalność firmy.",
      "Tylko w sektorze publicznym.",
      "W firmach IT i e-commerce."
    ],
    "answer": 1
  },
  {
    "question": "Co powinien zawierać rejestr czynności przetwarzania danych?",
    "options": [
      "Wyłącznie listę pracowników odpowiedzialnych za ochronę danych.",
      "Opis kategorii danych, celów i odbiorców.",
      "Listę klientów i ich adresów.",
      "Listę uprawnień administratora systemu."
    ],
    "answer": 1
  },
  {
    "question": "Jakie działania należy podjąć po stwierdzeniu naruszenia ochrony danych?",
    "options": [
      "Zignorować naruszenie, jeśli dane zostały odzyskane.",
      "Zgłosić naruszenie do PUODO i osoby, której dane dotyczą.",
      "Zresetować hasło w systemie.",
      "Usunąć naruszone dane i zamknąć sprawę."
    ],
    "answer": 1
  },
  {
    "question": "Jakie dane wymagają szczególnej ochrony według RODO?",
    "options": [
      "Wiek i płeć.",
      "Dane genetyczne i biometryczne.",
      "Adres e-mail i numer telefonu.",
      "Nazwa użytkownika systemu."
    ],
    "answer": 1
  },
  {
    "question": "Co oznacza pojęcie 'przetwarzanie danych'?",
    "options": [
      "Wyłącznie ich zapisanie w systemie.",
      "Każdą operację na danych – zbieranie, przechowywanie, usuwanie itd.",
      "Tylko udostępnienie danych osobom trzecim.",
      "Tylko przechowywanie danych na serwerze."
    ],
    "answer": 1
  },
  {
    "question": "Jaki jest cel 'privacy by default'?",
    "options": [
      "Dostosowanie ustawień do maksymalnego gromadzenia danych.",
      "Domyślne ustawienia systemu mają chronić prywatność użytkownika.",
      "Brak możliwości zmiany ustawień prywatności.",
      "Udostępnienie danych wszystkim użytkownikom."
    ],
    "answer": 1
  },
  {
    "question": "Co oznacza 'profilowanie' w RODO?",
    "options": [
      "Przechowywanie danych na podstawie PESEL.",
      "Zautomatyzowane przetwarzanie danych w celu oceny cech osoby.",
      "Tworzenie wizytówek użytkownika.",
      "Ustalanie tożsamości na podstawie hasła."
    ],
    "answer": 1
  },
  {
    "question": "Czym różni się pseudonimizacja od anonimizacji?",
    "options": [
      "Anonimizacja pozwala zidentyfikować osobę, pseudonimizacja – nie.",
      "Pseudonimizacja wymaga dodatkowych danych, anonimizacja – nieodwracalna.",
      "Anonimizacja jest mniej bezpieczna niż pseudonimizacja.",
      "Nie ma różnicy między tymi pojęciami."
    ],
    "answer": 1
  },
  {
    "question": "Czy dane pracownika są danymi osobowymi?",
    "options": [
      "Nie – dotyczą tylko stosunku pracy.",
      "Tak – pracodawca przetwarza dane osobowe zatrudnionych.",
      "Tylko jeśli są przekazane do ZUS.",
      "Tylko jeśli zawierają numer konta bankowego."
    ],
    "answer": 1
  },
  {
    "question": "Kiedy przetwarzanie danych może być uznane za zgodne z prawem?",
    "options": [
      "Gdy jest uzasadnione interesem administratora.",
      "Zawsze, jeśli dane są publiczne.",
      "Tylko po zgodzie właściciela danych.",
      "W sytuacjach wskazanych w art. 6 RODO."
    ],
    "answer": 3
  },
  {
    "question": "Co grozi za naruszenie przepisów RODO?",
    "options": [
      "Wyłącznie kara grzywny do 5000 zł.",
      "Kara ograniczenia wolności.",
      "Kary administracyjne sięgające do 20 mln euro lub 4% obrotu.",
      "Brak konsekwencji prawnych – jedynie ostrzeżenie."
    ],
    "answer": 2
  },
  {
    "question": "Jakie dane dotyczące lokalizacji mogą być danymi osobowymi?",
    "options": [
      "Dane GPS przypisane do konkretnej osoby.",
      "Adresy IP urządzeń firmowych.",
      "Mapy drogowe.",
      "Wskazania GPS z systemu nawigacyjnego."
    ],
    "answer": 0
  },
  {
    "question": "Czy informacje z mediów społecznościowych mogą być danymi osobowymi?",
    "options": [
      "Nie, bo zostały upublicznione.",
      "Tak, jeśli można po nich zidentyfikować osobę.",
      "Nie, bo są dostępne tylko online.",
      "Tylko wtedy, gdy zawierają numer PESEL."
    ],
    "answer": 1
  },
  {
    "question": "Kiedy należy poinformować PUODO o naruszeniu danych?",
    "options": [
      "Zawsze w ciągu 24 godzin.",
      "W ciągu 72 godzin, jeśli może to skutkować naruszeniem praw i wolności osoby.",
      "Po wykryciu i potwierdzeniu naruszenia przez IT.",
      "Tylko jeśli dane dotyczą klientów indywidualnych."
    ],
    "answer": 1
  },
  {
    "question": "Czy pseudonimizacja jest środkiem bezpieczeństwa w rozumieniu RODO?",
    "options": [
      "Nie, to technika nie mająca znaczenia.",
      "Tak, jest to jeden z rekomendowanych środków.",
      "Tylko w sektorze finansowym.",
      "Wyłącznie w krajach UE."
    ],
    "answer": 1
  },
  {
    "question": "Kto odpowiada za wykazanie zgodności z RODO?",
    "options": [
      "PUODO.",
      "Podmiot przetwarzający dane.",
      "Administrator danych.",
      "Ministerstwo Cyfryzacji."
    ],
    "answer": 2
  }
];