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
            nazwa: "Wyprosty kolan na maszynie jednonóż",
            obraz: "Pictures/cwiczenie-czworoglowe1.jpg",
            miesnie: {
                glowne: [
                    "m. czworogłowy uda"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja siedząca na siedzisku.",
                "Dłonie z boku na uchwytach maszyny.",
                "Proste plecy."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wykonaj dynamiczny wyprost jedną nogą w kolanie, zadbaj o brak przeprostu (stałe napięcie mięśnia).",
                "Wraz z wdechem uginaj powolnym ruchem kolano do pozycji wyjściowej.",
                "Wykonaj wyznaczoną liczbę powtórzeń na nogę."
            ]
        },
        {
            nazwa: "Przysiad wykroczny z hantlami",
            obraz: "Pictures/cwiczenie-czworoglowe2.jpg",
            miesnie: {
                glowne: [
                    "m. czworogłowy uda",
                    "m. pośladkowy",
                    "grupa m. kulszowo-goleniowych"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja wykroczna, nogi wyprostowane, stopa zakroczna ustawiona w pozycji na palcach.",
                "Plecy wyprostowane, łopatki ściśnięte.",
                "Hantle w dłoniach, ramiona spoczywają swobodnie wzdłuż tułowia.",
                "Mięśnie brzucha napięte."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową i naturalną krzywiznę kręgosłupa, wykonaj głęboki wdech do przepony, ugnij kolana tak, aby utrzymać ciało w jednej linii.",
                "Ruch kontynuuj do momentu, aż kolano nogi zakrocznej znajdzie się tuż nad podłogą lub gdy poczujesz bardzo mocne rozciąganie nogi zakrocznej.",
                "Kontroluj biodra, aby cały czas poruszały się w jednej linii.",
                "Wraz z wydechem wykonaj wyprost w stawach kolanowych i wróć do pozycji wyjściowej."
            ]
        },
        {
            nazwa: "Wypychanie nogami na suwnicy",
            obraz: "Pictures/cwiczenie-czworoglowe3.jpg",
            miesnie: {
                glowne: [
                    "m. czworogłowy uda",
                    "m. dwugłowy uda"
                ],
                pomocnicze: [
                    "m. pośladkowy"
                ]
            },
            pozycja_wyjsciowa: [
                "Pozycja siedząca w siedzisku suwnicy.",
                "Plecy oraz głowa cały czas przylegają do oparcia maszyny.",
                "Dłonie z boku na uchwytach maszyny.",
                "Nogi nieco szerzej od szerokości barków.",
                "Palce stóp skierowane lekko na zewnątrz."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wolno opuszczaj ciężar mniej więcej do kąta prostego w stawie kolanowym, pamiętaj o wdechu powietrza.",
                "Wykonując wydech, prostuj stawy kolanowe, wypychając ciężar, jednak bez przeprostu w kolanach.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Przysiad na maszynie Smitha",
            obraz: "Pictures/cwiczenie-czworoglowe4.jpg",
            miesnie: {
                glowne: [
                    "m. czworogłowy uda"
                ],
                pomocnicze: [
                    "m. dwugłowy uda",
                    "m. pośladkowy"
                ]
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca, plecy proste.",
                "Sztanga trzymana nachwytem, nieco szerzej niż szerokość barków.",
                "Klatka piersiowa wypchnięta do przodu, łopatki ściągnięte, brzuch i pośladki napięte."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową oraz naturalną krzywiznę kręgosłupa, weź wdech, wykonaj płynny i powolny przysiad, tak by zejść kolanami poniżej linii bioder.",
                "Wykonując wydech, wstań do pozycji wyjściowej. Nie wykonuj przeprostu w stawach kolanowych.",
                "Wykonaj ruch wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Zercher squat",
            obraz: "Pictures/cwiczenie-czworoglowe5.jpg",
            miesnie: {
                glowne: [
                    "m. czworogłowy uda",
                    "m. dwugłowy uda",
                    "m. pośladkowy"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca.",
                "Sztanga ułożona przed klatką piersiową, trzymana w zgiętych ramionach.",
                "Stopy ustawione mniej więcej na szerokość barków (palce stóp na zewnątrz).",
                "Klatka piersiowa wypchnięta, łopatki ściągnięte, brzuch i pośladki napięte."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, weź wdech, wykonaj płynny i powolny przysiad, tak by biodra znalazły się poniżej linii kolan.",
                "Następnie wróć do pozycji wyjściowej poprzez wyprost w stawach biodrowych i kolanowych. Nie wykonuj przeprostu w stawach kolanowych.",
                "W końcowej fazie ruchu wykonaj wydech."
            ]
        },
        {
            nazwa: "Przysiad z hantelkami",
            obraz: "Pictures/cwiczenie-czworoglowe6.jpg",
            miesnie: {
                glowne: [
                    "m. czworogłowy uda"
                ],
                pomocnicze: [
                    "m. dwugłowy uda",
                    "m. pośladkowy"
                ]
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca, plecy proste.",
                "Hantelki trzymane chwytem młotkowym.",
                "Klatka piersiowa wypchnięta do przodu, łopatki ściągnięte, brzuch i pośladki napięte.",
                "Stopy mniej więcej na szerokości barków (palce stóp na zewnątrz)."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową oraz naturalną krzywiznę kręgosłupa, wykonaj płynny i powolny przysiad wraz z powolnym wdechem powietrza.",
                "Wykonując wydech, wstań do pozycji wyjściowej. Nie wykonuj przeprostu w stawach kolanowych.",
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
