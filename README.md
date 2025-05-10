<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>📄 Dokumentacja projektu: FITVERSO</h1>
  <h2>1. Wstęp</h2>
  <p>
    Serwis <strong>FITVERSO</strong> to strona internetowa poświęcona tematyce fitness. Pomaga użytkownikom prowadzić zdrowy tryb życia poprzez informacje o trenerach, przepisy dietetyczne, plany ćwiczeń i narzędzia takie jak kalkulatory BMI i zapotrzebowania kalorycznego.
    Strona jest responsywna i hostowana na platformie <strong>GitHub Pages</strong>.
  </p>

  <h2>2. Opis struktury serwisu</h2>
  <p>Strona zawiera pięć głównych podstron. Podstrona "Ćwiczenia" dzieli się na 3 kolejne sekcje, z których "Trening siłowy" prowadzi do 9 podstron dla każdej partii mięśniowej.</p>

  <h3>2.1. Strona główna (index.html)</h3>
  <ul>
    <li>Przyciski CTA</li>
    <li>Opis korzyści FITVERSO</li>
    <li>Linki do podstron z funkcjami</li>
  </ul>

  <h3>2.2. Trenerzy (trenerzy.html)</h3>
  <ul>
    <li>Lista trenerów z opisami i zdjęciami</li>
    <li>Specjalizacje, doświadczenie, social media</li>
  </ul>

  <h3>2.3. Przepisy (przepisy.html)</h3>
  <ul>
    <li>Przepisy zdrowych dań (np. śniadania, obiady, desery)</li>
    <li>Lista składników, instrukcja, obrazki</li>
  </ul>

  <h3>2.4. Ćwiczenia (cwiczenia.html)</h3>
  <p>Podstrona zawiera 3 sekcje:</p>
  <ul>
    <li><strong>Trening siłowy</strong> (trening-silowy.html)
      <ul>
        <li>Klatka piersiowa (klatka.html)</li>
        <li>Plecy (plecy.html)</li>
        <li>Mięśnie czworogłowe uda (czworoglowe.html)</li>
        <li>Mięśnie dwugłowe uda i pośladki (dwuglowe.html)</li>
        <li>Łydki (lydki.html)</li>
        <li>Barki (barki.html)</li>
        <li>Biceps (biceps.html)</li>
        <li>Triceps (triceps.html)</li>
        <li>Brzuch (brzuch.html)</li>
      </ul>
    </li>
    <li><strong>Cardio</strong> (cardio.html)</li>
    <li><strong>Stretching</strong> (stretching.html)</li>
  </ul>

  <h3>2.5. Kalkulator (kalkulator.html)</h3>
  <ul>
    <li>Kalkulator BMI (na podstawie wzrostu i wagi)</li>
    <li>Kalkulator zapotrzebowania kalorycznego (wzór Harrisa-Benedicta)</li>
  </ul>

  <h2>3. Nawigacja</h2>
  <p>
    Menu nawigacyjne znajduje się w nagłówku i zawiera linki do głównych podstron.
    Na urządzeniach mobilnych menu zamienia się w przycisk hamburgera. Kliknięcie logo przenosi na stronę główną.
  </p>

  <h2>4. Stopka</h2>
  <p>© 2025 FITVERSO. Treści użyte wyłącznie w celach naukowych.</p>
  <p>Link do GitHub: <a href="https://github.com/Ricardosz02/Strona-Fitness">https://github.com/Ricardosz02/Strona-Fitness</a></p>

  <h2>5. Technologie</h2>
  <ul>
    <li><strong>HTML5</strong> – semantyczna struktura</li>
    <li><strong>CSS3</strong> – layout na Flexbox i Grid (plik styles.css)</li>
    <li><strong>JavaScript</strong> – menu mobilne, obliczenia kalkulatorów</li>
    <li><strong>Google Fonts</strong> – Roboto, Bebas Neue</li>
    <li><strong>SVG</strong> – ikona GitHub</li>
    <li><strong>GitHub Pages</strong> – hosting</li>
    <li>Brak frameworków (czysty HTML, CSS, JS)</li>
  </ul>

  <h2>6. Testy</h2>
  <table border="1">
    <thead>
      <tr>
        <th>Przeglądarka</th>
        <th>2560×1440</th>
        <th>912×1368</th>
        <th>390×844</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Chrome</td><td>✔</td><td>✔</td><td>✔</td>
      </tr>
      <tr>
        <td>Edge</td><td>✔</td><td>✔</td><td>✔</td>
      </tr>
      <tr>
        <td>Safari</td><td>–</td><td>–</td><td>✔</td>
      </tr>
      <tr>
        <td>Firefox</td><td>✔</td><td>✔</td><td>✔</td>
      </tr>
      <tr>
        <td>Opera</td><td>✔</td><td>✔</td><td>✔</td>
      </tr>
    </tbody>
  </table>

  <h2>7. Podsumowanie</h2>
  <p>
    Projekt <strong>FITVERSO</strong> to nowoczesna i funkcjonalna witryna fitness.
    Oferuje informacje o trenerach, zdrowe przepisy, zestawy ćwiczeń oraz kalkulatory BMI i zapotrzebowania kalorycznego.
    Całość oparta na czystym HTML, CSS i JavaScript, bez frameworków, hostowana na GitHub Pages.
  </p>
</body>
</html>
