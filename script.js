/* ============================================================
   Piotr Szcząchor — portfolio
   Language toggle (EN / PL)
   ------------------------------------------------------------
   English text lives in the HTML. Every element with a
   `data-i18n` attribute gets its text swapped from the PL
   dictionary below when Polish is selected. The choice is
   persisted in localStorage.
   ============================================================ */

const PL = {
  // Nav
  'nav.services': 'Usługi',
  'nav.skills': 'Technologie',
  'nav.experience': 'Doświadczenie',
  'nav.portfolio': 'Portfolio',
  'nav.projects': 'Projekty',
  'nav.education': 'Edukacja',
  'nav.languages': 'Języki',
  'nav.contact': 'Kontakt',
  'nav.cv': 'Pobierz CV',

  // Hero
  'hero.badge': 'Otwarty na projekty freelance i B2B',
  'hero.intro': 'Doświadczony Fullstack .NET Developer. Tworzę aplikacje webowe, API i integracje systemowe dla firm, a także szybkie, nowoczesne strony internetowe dla małych biznesów. Pewnie poruszam się w .NET, React i Angular, dostarczając solidne, gotowe do wdrożenia oprogramowanie.',
  'hero.cta': 'Napisz do mnie',
  'hero.loc': 'Polska · praca zdalna · własna działalność (B2B)',

  // Services
  'svc.heading': 'Co mogę dla Ciebie zrobić',
  'svc.1.title': 'Strony WWW dla małych firm',
  'svc.1.desc': 'Szybka, nowoczesna strona, która przyciąga klientów — projekt, wdrożenie i utrzymanie od A do Z.',
  'svc.2.title': 'Aplikacje webowe',
  'svc.2.desc': 'Aplikacje full-stack: .NET na backendzie, React lub Angular na froncie — od pierwszej linijki kodu po produkcję.',
  'svc.3.title': 'Systemy i integracje',
  'svc.3.desc': 'API REST, SOAP i gRPC, płatności, uwierzytelnianie z Keycloak, usługi chmurowe AWS i integracje, np. Xero.',

  // Skills
  'skills.heading': 'Stack technologiczny',
  'skills.tools': 'Narzędzia i praktyki',

  // Experience
  'exp.heading': 'Doświadczenie zawodowe',
  'exp.cc.role': '.NET Developer with React',
  'exp.cc.dates': '2025.11 — obecnie',
  'exp.cc.b1': 'Rozwój platformy płatniczej opartej na rozproszonym systemie aktorów Akka.NET',
  'exp.cc.b2': 'Projektowanie usług gRPC, w tym endpointów streamingowych; BDD ze scenariuszami wykonywalnymi',
  'exp.cc.b3': 'Integracja usług AWS — SQS (komunikacja) i DynamoDB (persystencja); konteneryzacja z Dockerem',
  'exp.cc.b4': 'Utrzymanie systemu zarządzania warsztatami samochodowymi w UK: automatyczny import magazynu (Hangfire, Redis) i synchronizacja księgowości z Xero',
  'exp.cept.role': '.NET & React Developer · część etatu',
  'exp.cept.dates': '2025.11 — obecnie',
  'exp.cept.b1': 'Przeprojektowanie parsowania dokumentów na asynchroniczne przetwarzanie oparte na RabbitMQ',
  'exp.cept.b2': 'Mechanizm wyboru parsera oparty na wzorcu Strategia — automatyczna obsługa różnych typów dokumentów',
  'exp.cept.b3': 'Rozwój nowych funkcji i utrzymanie aplikacji ubezpieczeniowych',
  'exp.ceft.role': '.NET & React Developer · pełny etat',
  'exp.ceft.dates': '2023.11 — 2025.11',
  'exp.ceft.b1': 'Aplikacja ubezpieczeniowa używana przez największych polskich ubezpieczycieli — kod zaprojektowany od zera',
  'exp.ceft.b2': 'Praca full-stack z API REST i SOAP w architekturze mikroserwisów',
  'exp.ceft.b3': 'Uwierzytelnianie i autoryzacja z Keycloak, konfiguracja przez Terraform; integracja LDAP',
  'exp.ceft.b4': 'Prowadzenie migracji z IdentityServer do Keycloak w istniejących rozwiązaniach',
  'exp.il.role': 'Fullstack .NET & Angular Developer',
  'exp.il.b1': 'Rozwój systemu ERP w .NET i Angular; projektowanie API REST',
  'exp.il.b2': 'Sklep internetowy w React z systemem pluginów; zarządzanie stanem z Redux',
  'exp.il.b3': 'Optymalizacja wydajności API dzięki mechanizmom cache',
  'exp.il.b4': 'Praca w międzynarodowym zespole polsko-francusko-szwajcarskim',

  // Portfolio
  'port.heading': 'Strony, które zbudowałem dla firm',
  'port.wianova.kind': 'Strona firmowa',
  'port.wianova.desc': 'Strona wizerunkowa dla pracowni florystycznej — świece sojowe, flower boxy i kompozycje kwiatowe. Elegancka, szybka i łatwa w aktualizacji.',

  // Projects
  'proj.heading': 'Projekty własne',
  'proj.hh.desc': 'Aplikacja medyczna full-stack — podstawa mojej pracy inżynierskiej. Rejestracja wizyt, zarządzanie lekarzami i administracja kliniką; czysta architektura, UI zaprojektowane w Figmie.',
  'proj.ml.title': 'Repozytorium Machine Learning',
  'proj.ml.desc': 'Zbiór moich notebooków Jupyter z eksperymentami i modelami uczenia maszynowego.',

  // Education
  'edu.heading': 'Edukacja',
  'edu.agh.school': 'Akademia Górniczo-Hutnicza w Krakowie',
  'edu.agh.degree': 'Informatyka i Systemy Inteligentne · inżynier',
  'edu.wut.school': 'Politechnika Warszawska',
  'edu.wut.degree': 'Informatyka · magister inżynier',
  'edu.wut.dates': '2024 — obecnie',

  // Languages
  'lang.heading': 'Języki',
  'lang.pl.name': 'Polski',
  'lang.pl.level': 'Ojczysty',
  'lang.en.name': 'Angielski',
  'lang.en.level': 'C1 · zaawansowany',

  // Contact
  'contact.heading': 'Zbudujmy coś razem',
  'contact.text': 'Potrzebujesz strony dla swojej firmy albo dewelopera .NET do zespołu? Odezwij się.',
  'contact.linkedin': 'Profil LinkedIn',
  'contact.company': 'Dane firmy: Piotr Szcząchor · NIP 9452318975'
};

// English texts are captured from the HTML on first load,
// so the dictionary above only needs the Polish strings.
const EN = {};

function captureEnglish() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    EN[el.getAttribute('data-i18n')] = el.textContent;
  });
}

function setLang(lang) {
  const dict = lang === 'pl' ? PL : EN;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-toggle button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }
}

captureEnglish();

document.querySelectorAll('.lang-toggle button').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

let saved = 'en';
try { saved = localStorage.getItem('lang') || 'en'; } catch (e) { /* private mode */ }
if (saved === 'pl') setLang('pl');
