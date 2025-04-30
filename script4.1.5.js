document.addEventListener("DOMContentLoaded", function () {
    // Tworzenie elementu logo
    const logoSb = document.createElement('a');
    logoSb.href = 'index.html';
    logoSb.id = 'logo_sb';

    // Tworzenie elementu img i przypisanie mu ścieżki do obrazka
    const logoImg = document.createElement('img');
    logoImg.src = 'Pictures/Logo.png'; // Ścieżka do obrazka
    logoImg.alt = 'Logo'; // Alternatywny tekst

    // Ustawienia rozmiaru obrazka
    logoImg.style.height = 'auto'; // Automatyczna wysokość, zachowująca proporcje obrazu
    logoImg.style.maxWidth = '100%'; // Zapewnienie, że obrazek nie wyjdzie poza kontener
    logoImg.style.borderRadius = '10px'; // Zaokrąglone rogi obrazka

    // Dodanie obrazka do linku logo
    logoSb.appendChild(logoImg);

    // Dodanie logo do kontenera
    const baner = document.getElementById('baner');
    baner.insertBefore(logoSb, baner.firstChild); // Wstawienie logo na początek kontenera

    // Efekt podświetlenia bloków
    const bloki = document.querySelectorAll(".blok");

    bloki.forEach(blok => {
        blok.addEventListener("mouseenter", function () {
            this.style.transition = "0.3s ease-in-out";
            this.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.3)";
        });

        blok.addEventListener("mouseleave", function () {
            this.style.boxShadow = "none";
        });
    });

    // Wysuwane menu
    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("sideMenu");
    const closeMenu = document.getElementById("closeMenu");

    if (hamburger && sideMenu) {
        hamburger.addEventListener("click", function (event) {
            sideMenu.classList.toggle("show");
            event.stopPropagation();
        });

        closeMenu.addEventListener("click", function () {
            sideMenu.classList.remove("show");
        });
    }

    // Ukrycie menu po kliknięciu poza nim
    document.addEventListener("click", function (event) {
        if (!sideMenu.contains(event.target) && event.target !== hamburger) {
            sideMenu.classList.remove("show");
        }
    });

    // Dynamiczne generowanie podmenu dla "Ćwiczenia" z symbolem +/-
    const submenuToggle = document.querySelector(".submenu-toggle");
    const toggleIcon = document.querySelector(".toggle-icon");
    const submenuParent = document.querySelector(".submenu-parent");

    if (submenuToggle && toggleIcon && submenuParent) {
        // Tworzenie podmenu dynamicznie
        const submenu = document.createElement("ul");
        submenu.classList.add("submenu");

        // Dane dla podmenu
        const submenuItems = [
            { text: "TRENING SIŁOWY", href: "trening-silowy.html" },
            { text: "CARDIO", href: "cardio.html" },
            { text: "STRETCHING", href: "stretching.html" }
        ];

        // Generowanie elementów podmenu
        submenuItems.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = item.href;
            a.textContent = item.text;
            li.appendChild(a);
            submenu.appendChild(li);
        });

        // Dodanie podmenu do DOM
        submenuParent.appendChild(submenu);

        // Obsługa kliknięcia w symbol "+"/"−"
        toggleIcon.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            submenu.classList.toggle("show");
            // Zmiana symbolu +/-
            toggleIcon.textContent = submenu.classList.contains("show") ? "−" : "+";
        });

        // Kliknięcie w "Ćwiczenia" przenosi na podstronę (brak event.preventDefault)
        submenuToggle.addEventListener("click", function (event) {
            // Domyślne zachowanie linku (przejście na cwiczenia.html)
        });
    }

    // ---------------------
    // Paginacja ćwiczeń
    // ---------------------
    const cwiczenia = [
        {
            nazwa: "Wspięcia na palce jednonóż z hantlami",
            obraz: "Pictures/cwiczenie-lydki1.jpg",
            miesnie: {
                glowne: [
                    "m. brzuchaty",
                    "m. płaszczkowaty"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca, plecy wyprostowane, ramię wzdłuż tułowia, sztangielka w dłoni.",
                "Stopy ustawione na podwyższeniu, wolna ręka utrzymuje równowagę."
            ],
            ruch: [
                "W pozycji stojącej na podwyższeniu unieś jedną nogę w górę.",
                "Pięta nogi, na której stoisz, powinna być mocno obniżona, a mięśnie łydki maksymalnie rozciągnięte.",
                "Energicznym ruchem wykonaj wspięcie na palce i zatrzymaj ruch w maksymalnym punkcie.",
                "Następnie powolnym, kontrolowanym ruchem opuść piętę aż do maksymalnego rozciągnięcia."
            ]
        },
        {
            nazwa: "Wspięcia na palcach w pozycji siedzącej ze sztangą ułożoną na kolanach",
            obraz: "Pictures/cwiczenie-lydki2.jpg",
            miesnie: {
                glowne: [
                    "m. brzuchaty",
                    "m. płaszczkowaty",
                    "m. strzałkowy długi"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja siedząca, nogi ugięte w kolanach, sztanga ustawiona na mięśniach czworogłowych, tuż nad stawem kolanowym.",
                "Przednia część stóp na podwyższeniu. Pięty opuszczone, kostki w pasywnym zgięciu."
            ],
            ruch: [
                "Z pozycji, w której stopa jest mocno zadarta do góry, pięta skrajnie obniżona, palce wskazują sufit, a łydka jest mocno rozciągnięta, odpychaj się od podwyższenia poprzez mocne wspięcie na palce i napięcie łydek. Unieś pięty maksymalnie w górę.",
                "Po коротkim utrzymaniu łydki w maksymalnym napięciu opuść pięty poniżej poziomu palców, ponownie rozciągając łydkę.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Wspięcia na palcach na suwnicy",
            obraz: "Pictures/cwiczenie-lydki3.jpg",
            miesnie: {
                glowne: [
                    "m. brzuchaty",
                    "m. płaszczkowaty",
                    "m. podeszwowy"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Usiądź na suwnicy do prostowania nóg.",
                "Przednia część stopy ustawiona na platformie.",
                "Plecy oraz głowa dotykają oparcia.",
                "Prostując kolana, zwalniaj maszynę."
            ],
            ruch: [
                "Z pozycji, w której stopa jest mocno zadarta, a łydka jest mocno rozciągnięta, odpychaj się od platformy poprzez mocne wspięcie na palce i napięcie łydek.",
                "Po krótkim utrzymaniu łydki w maksymalnym napięciu opuszczaj pięty poniżej poziomu palców, ponownie rozciągając łydkę.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Wspięcia na palcach stojąc z wykorzystaniem suwnicy Smitha",
            obraz: "Pictures/cwiczenie-lydki4.jpg",
            miesnie: {
                glowne: [
                    "m. brzuchaty",
                    "m. płaszczkowaty",
                    "m. strzałkowy długi"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Ustaw step fitnessowy lub inny rodzaj podwyższenia pod gryf suwnicy.",
                "Stań na podwyższeniu, ustaw gryf na mięśniach grzbietu, a następnie zwolnij zaczepy suwnicy."
            ],
            ruch: [
                "Z pozycji, w której stopa jest mocno zadarta do góry, pięta skrajnie obniżona, palce wskazują sufit, a łydka jest mocno rozciągnięta, odpychaj się od podwyższenia poprzez mocne wspięcie na palce i napięcie łydek.",
                "Po krótkim utrzymaniu łydki w maksymalnym napięciu opuszczaj pięty pod poziom palców, ponownie rozciągając łydkę.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Wspięcia na palcach siedząc na maszynie",
            obraz: "Pictures/cwiczenie-lydki5.jpg",
            miesnie: {
                glowne: [
                    "m. brzuchaty",
                    "m. płaszczkowaty"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Usiądź na siedzisku maszyny do łydek.",
                "Oprzyj przednią część stopy na platformie.",
                "Unieś lekko pięty ku górze tak, by możliwe było odciągnięcie dźwigni zwalniającej ciężar."
            ],
            ruch: [
                "Z pozycji, w której stopa jest mocno zadarta do góry, pięta skrajnie obniżona, palce wskazują sufit, a łydka jest mocno rozciągnięta, odpychaj się od platformy poprzez mocne wspięcie na palce i napięcie łydek.",
                "Po krótkim utrzymaniu łydki w maksymalnym napięciu, opuszczaj pięty poniżej poziomu palców, ponownie rozciągając łydkę.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Wspięcia na palcach stojąc ze sztangą trzymaną na plecach",
            obraz: "Pictures/cwiczenie-lydki6.jpg",
            miesnie: {
                glowne: [
                    "m. brzuchaty",
                    "m. płaszczkowaty",
                    "m. strzałkowy długi"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Ustaw sztangę na plecach (górna część mięśnia czworobocznego).",
                "Nogi w kolanach wyprostowane, należy unikać przeprostu.",
                "Stań na wcześniej przygotowanym podwyższeniu (step lub szeroki talerz obciążeniowy)."
            ],
            ruch: [
                "Z pozycji, w której stopa jest mocno zadarta do góry, pięta skrajnie obniżona, palce wskazują sufit, a łydka jest mocno rozciągnięta, odpychaj się od podwyższenia poprzez mocne wspięcie na palce i napięcie łydek.",
                "Po krótkim utrzymaniu łydki w maksymalnym napięciu, opuszczaj pięty poniżej poziomu palców, ponownie rozciągając łydkę.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        }
    ];

    const exercisesPerPage = 4;
let currentPage = 1;

const cwiczeniaContainer = document.getElementById("cwiczenia");
const paginationContainer = document.getElementById("pagination");

// Funkcja przewijająca do góry
function scrollToTop() {
    const scrollTargets = [
        document.getElementById("main"),
        document.scrollingElement,
        document.body
    ];
    for (const el of scrollTargets) {
        if (el && el.scrollTop > 0) {
            el.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        }
    }
}

// Obsługa kliknięcia przycisku "Na górę"
document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (scrollBtn) {
        scrollBtn.addEventListener("click", scrollToTop);
    }
});

function toggleExerciseDetails(cwiczenieDiv, cwiczenie, button) {
    let detailsDiv = cwiczenieDiv.querySelector(".exercise-details");
    if (detailsDiv) {
        const isVisible = detailsDiv.classList.contains("visible");
        detailsDiv.classList.toggle("visible");
        button.textContent = isVisible ? "Pokaż szczegóły" : "Ukryj szczegóły";
        return;
    }

    detailsDiv = document.createElement("div");
    detailsDiv.className = "exercise-details";
    detailsDiv.style.opacity = "0";
    detailsDiv.style.maxHeight = "0";
    detailsDiv.innerHTML = `
        <div class="details-container">
            <div class="miesnie">
                <h4>Mięśnie zaangażowane:</h4>
                <p><strong>Główne:</strong></p>
                <ul>
                    ${cwiczenie.miesnie.glowne.map(miesien => `<li>${miesien}</li>`).join('')}
                </ul>
                ${cwiczenie.miesnie.pomocnicze.length > 0 ? `
                    <p><strong>Pomocnicze:</strong></p>
                    <ul>
                        ${cwiczenie.miesnie.pomocnicze.map(miesien => `<li>${miesien}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>
            <div class="pozycja_wyjsciowa">
                <h4>Pozycja wyjściowa:</h4>
                <ol>
                    ${cwiczenie.pozycja_wyjsciowa.map(krok => `<li>${krok}</li>`).join('')}
                </ol>
            </div>
            <div class="ruch">
                <h4>Ruch:</h4>
                <ol>
                    ${cwiczenie.ruch.map(krok => `<li>${krok}</li>`).join('')}
                </ol>
            </div>
        </div>
    `;
    cwiczenieDiv.querySelector(".blok2").appendChild(detailsDiv);
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            detailsDiv.classList.add("visible");
            detailsDiv.style.opacity = "";
            detailsDiv.style.maxHeight = "";
        });
    });
    button.textContent = "Ukryj szczegóły";
}

function renderExercises() {
    const totalPages = Math.ceil(cwiczenia.length / exercisesPerPage);
    const start = (currentPage - 1) * exercisesPerPage;
    const end = start + exercisesPerPage;
    const currentExercises = cwiczenia.slice(start, end);

    cwiczeniaContainer.innerHTML = '';
    currentExercises.forEach(c => {
        const div = document.createElement("div");
        div.className = "cwiczenie";
        div.innerHTML = `
        <div class="blok1">
            <div class="cwiczenie-tresc">
                <h3>${c.nazwa}</h3>
            </div>
            <div class="cwiczenie-obraz">
                <img src="${c.obraz}" alt="${c.nazwa}">
            </div>
        </div>
        <div class="blok2"></div>
        <button class="details-button">Pokaż szczegóły</button>
        `;
        const button = div.querySelector(".details-button");
        button.addEventListener("click", () => toggleExerciseDetails(div, c, button));
        cwiczeniaContainer.appendChild(div);
    });

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.className = "pagination-button";
        if (i === currentPage) {
            btn.classList.add("active");
        }
        btn.addEventListener("click", () => {
            currentPage = i;
            renderExercises();
            scrollToTop();
        });
        paginationContainer.appendChild(btn);
    }
}

renderExercises();


});
