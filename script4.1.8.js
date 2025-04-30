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
            nazwa: "Prostowanie ramion z linkami wyciągu górnego",
            obraz: "Pictures/cwiczenie-triceps1.jpg",
            miesnie: {
                glowne: [
                    "m. trójgłowy ramienia"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Stań przodem do wyciągu. Chwyć za linki.",
                "Sylwetka wyprostowana, nieznacznie pochylona.",
                "Łokcie znajdują się blisko tułowia."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, weź wdech i rozpocznij prostowanie ramion w stawach łokciowych.",
                "Podczas ruchu utrzymuj ciało nieruchomo, łopatki mocno ściągnięte, kontynuuj ruch do pełnego wyprostu w stawie łokciowym.",
                "W momencie maksymalnego napięcia zatrzymaj ruch na ułamek sekundy, a następnie rozpocznij odkładanie ciężaru, wydychając powietrze."
            ]
        },
        {
            nazwa: "Wyciskanie francuskie z przenoszeniem ramion za głowę",
            obraz: "Pictures/cwiczenie-triceps2.jpg",
            miesnie: {
                glowne: [
                    "m. trójgłowy ramienia"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Leżąc na ławce, chwyć sztangę łamaną wąskim chwytem. Dłonie nieco węziej niż szerokość barków, kciuki skierowane do siebie.",
                "Ściągnij sztangę z uchwytu i unieś ją nad klatkę piersiową, ramiona powinny znajdować się prostopadle do podłoża."
            ],
            ruch: [
                "Inicjując wdech, opuść sztangę do czoła, trzymając ramiona nieruchomo. Przedramiona wykonują półkolisty ruch.",
                "Utrzymując stałe zgięcie w łokciu, przenieś sztangę za głowę.",
                "Następnie przenieś sztangę z powrotem nad czoło i wykonaj wyprost w łokciach, wracając do pozycji początkowej."
            ]
        },
        {
            nazwa: "Wyciskanie francuskie hantlami",
            obraz: "Pictures/cwiczenie-triceps3.jpg",
            miesnie: {
                glowne: [
                    "m. trójgłowy ramienia"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja leżąca na ławce płaskiej.",
                "Hantle w dłoniach, ramiona wyprostowane nad klatką piersiową. Kciuki skierowane w tył."
            ],
            ruch: [
                "Inicjując wdech, opuść hantle do czoła, trzymając ramiona nieruchomo. Przedramiona wykonują półkolisty ruch.",
                "W momencie gdy hantle znajdą się blisko czoła, wróć do pozycji wyjściowej, prostując łokcie i wykonując wydech.",
                "Wykonaj zadaną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Prostowanie przedramion z liną z wyciągu dolnego stojąc",
            obraz: "Pictures/cwiczenie-triceps4.jpg",
            miesnie: {
                glowne: [
                    "m. trójgłowy ramienia"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Stań tyłem do wyciągu dolnego. Złap linę oburącz i unieś ramiona nad głowę.",
                "Ramiona ugięte w łokciach powinny wskazywać sufit. Kciuki do wewnątrz.",
                "Plecy proste, brzuch i pośladki mocno napięte w celu dodatkowej stabilizacji tułowia."
            ],
            ruch: [
                "Weź wdech, utrzymując prawidłową pozycję wyjściową; ramiona utrzymuj nieruchomo, łokcie blisko głowy, wykonaj mocny wyprost ramion w łokciach, unosząc linę nad głowę.",
                "W końcowej fazie ruchu wykonaj wydech i mocny wyprost ramion, zatrzymaj ruch na ułamek sekundy.",
                "Następnie kontrolowanym ruchem opuść linę poprzez uginanie ramion, wróć do pozycji wyjściowej."
            ]
        },
        {
            nazwa: "Prostowanie ramienia z wykorzystaniem wyciągu górnego",
            obraz: "Pictures/cwiczenie-triceps5.jpg",
            miesnie: {
                glowne: [
                    "m. trójgłowy ramienia",
                    "m. łokciowy"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Stań przodem do wyciągu. Jedną ręką złap uchwyt tak, aby kciuk był skierowany na zewnątrz (podchwyt).",
                "Ramię niezaangażowane w ćwiczenie oprzyj o talię bądź, jeśli jest taka możliwość, o ramę wyciągu.",
                "Łokieć znajduje się blisko tułowia."
            ],
            ruch: [
                "Weź wdech, utrzymując prawidłową pozycję wyjściową; ramię utrzymuj nieruchomo, łokieć blisko tułowia, prostuj ramię, ściągając uchwyt wyciągu w dół i mocno napinając triceps.",
                "W końcowej fazie ruchu wykonaj wydech, zatrzymaj ruch, gdy łokieć będzie w pełnym wyproście.",
                "Następnie poprzez spokojne i kontrolowane uginanie wróć do pozycji początkowej."
            ]
        },
        {
            nazwa: "Prostowanie przedramion z gryfem prostym trzymanym nachwytem z wyciągu górnego",
            obraz: "Pictures/cwiczenie-triceps6.jpg",
            miesnie: {
                glowne: [
                    "m. trójgłowy ramienia",
                    "m. łokciowy"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Stań przodem do wyciągu. Chwyć oburącz za gryf nachwytem (kciuki skierowane do wewnątrz).",
                "Sylwetka wyprostowana. Plecy proste, brzuch i pośladki napięte.",
                "Łokcie znajdują się blisko tułowia. Ramiona prostopadle do ziemi."
            ],
            ruch: [
                "Weź wdech, utrzymując prawidłową pozycję wyjściową; ramiona utrzymuj nieruchomo, łokcie blisko tułowia; prostuj ramiona, ściągnij uchwyt wyciągu w dół i mocno napnij triceps aż do pełnego wyprostu ramion, w końcowej fazie ruchu wykonaj wydech.",
                "W momencie maksymalnego napięcia, zatrzymaj ruch na ułamek sekundy.",
                "Następnie powolnym i kontrolowanym ruchem zacznij uginać ramię; rozciągając triceps, wróć do pozycji wyjściowej."
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
