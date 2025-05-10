document.addEventListener("DOMContentLoaded", function () {
    // Tworzenie elementu logo
    const logoSb = document.createElement('a');
    logoSb.href = 'index.html';
    logoSb.id = 'logo_sb';

    // Tworzenie elementu img i przypisanie mu ścieżki do obrazka
    const logoImg = document.createElement('img');
    logoImg.src = 'Pictures/Logo.png';
    logoImg.alt = 'Logo';

    // Ustawienia rozmiaru obrazka
    logoImg.style.height = 'auto';
    logoImg.style.maxWidth = '100%';
    logoImg.style.borderRadius = '10px';

    // Dodanie obrazka do linku logo
    logoSb.appendChild(logoImg);

    // Dodanie logo do kontenera
    const baner = document.getElementById('baner');
    baner.insertBefore(logoSb, baner.firstChild);

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
            nazwa: "Wyciskanie sztangi na ławce płaskiej",
            obraz: "Pictures/cwiczenie-klata1.jpg",
            miesnie: {
                glowne: [
                    "m. piersiowy większy",
                    "m. trójgłowy ramienia",
                    "m. naramienny przedni"
                ],
                pomocnicze: [
                    "m. zębaty przedni",
                    "m. kruczo-ramienny"
                ]
            },
            pozycja_wyjsciowa: [
                "Połóż się na ławce płaskiej.",
                "Stopy ustaw w lekkim rozkroku i mocno zaprzyj o podłoże.",
                "Chwyć sztangę nachwytem (palce wskazują przód, kciuki skierowane do środka) na taką szerokość, aby w połowie wykonywania ruchu kąt między ramieniem a przedramieniem wynosił 90 stopni.",
                "Łopatki ściągnięte, barki opuszczone i mocno dociśnięte do ławeczki.",
                "Zachowaj naturalne ustawienie kręgosłupa – odcinek lędźwiowy lekko uniesiony, pośladki na ławeczce."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i powolnym ruchem opuść sztangę do środkowej części klatki piersiowej, uginając ramiona w łokciach.",
                "Po przytrzymaniu sztangi w okolicach klatki przez ułamek sekundy zacznij unosić sztangę z powrotem do pozycji wyjściowej, wykonując wydech powietrza. Skup się, aby wyciskanie następowało z mięśnia piersiowego.",
                "W momencie wyprostowania ramion ze sztangą (unikaj przeprostu w łokciach) mocno dopnij mięsień piersiowy, po czym ponownie zacznij opuszczać sztangę.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Wyciskanie sztangielek chwytem neutralnym na ławce ze skosem dodatnim",
            obraz: "Pictures/cwiczenie-klata2.jpg",
            miesnie: {
                glowne: [
                    "m. piersiowy większy",
                    "m. trójgłowy ramienia",
                    "m. naramienny przedni"
                ],
                pomocnicze: [
                    "m. zębaty przedni",
                    "m. kruczo-ramienny"
                ]
            },
            pozycja_wyjsciowa: [
                "Połóż się na ławce ze skosem dodatnim (kąt pochylenia 30-45 stopni).",
                "Unieś sztangielki. Ramiona ustaw na szerokość barków, prostopadle do podłogi.",
                "Odwróć nadgarstki tak, aby palce były skierowane ku sobie."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i powolnym ruchem opuść sztangielki w okolicę środkowej części klatki piersiowej.",
                "Po przytrzymaniu sztangielek przez ułamek sekundy zacznij unosić sztangielki z powrotem do pozycji wyjściowej, wykonując wydech. Skup się, by wyciskanie następowało z mięśnia piersiowego.",
                "W momencie wyprostowania ramion ze sztangielkami (unikaj przeprostu w łokciach) mocno dopnij mięsień piersiowy, po czym weź wdech i ponownie zacznij opuszczać ramiona.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Rozpiętki na maszynie butterfly",
            obraz: "Pictures/cwiczenie-klata3.jpg",
            miesnie: {
                glowne: [
                    "m. piersiowy większy",
                    "m. naramienny przedni"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja siedząca na maszynie. Plecy mocno dociśnięte do oparcia.",
                "Stopy w lekkim rozkroku mocno zaparte o podłoże.",
                "Ramiona spoczywają na uchwytach przyrządu ustawione równolegle do podłogi. Łokcie zgięte. Przedramiona rozluźnione."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i przyciągnij do siebie ramiona, mocno napinając mięśnie piersiowe. Utrzymaj maksymalne napięcie mięśniowe przez ułamek sekundy, po czym wykonaj wydech.",
                "Weź wdech i powróć do pozycji wyjściowej.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Wyciskanie na maszynie hammer",
            obraz: "Pictures/cwiczenie-klata4.jpg",
            miesnie: {
                glowne: [
                    "m. piersiowy większy",
                    "m. trójgłowy ramienia",
                    "m. naramienny przedni"
                ],
                pomocnicze: [
                    "m. zębaty przedni",
                    "m. kruczo-ramienny"
                ]
            },
            pozycja_wyjsciowa: [
                "Pozycja siedząca na maszynie hammer.",
                "Stopy w lekkim rozkroku, mocno zaparte o podłoże.",
                "Siedzisko ustawione tak, aby uchwyty znajdowały się na wysokości środkowej bądź dolnej części klatki piersiowej.",
                "Plecy i głowa dociśnięte do oparcia. Łopatki ściągnięte."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i odepchnij uchwyty od siebie, prostując ramiona w łokciach.",
                "Kiedy ramiona są wyprostowane (unikaj przeprostu w łokciach), mocno dopnij mięsień piersiowy.",
                "Wykonaj wydech, po czym zacznij uginać ramiona w łokciach, przyciągając uchwyty do klatki, jednocześnie wykonując płynny wdech.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Wyciskanie na suwnicy Smitha leżąc na ławce skośnej głową w dół",
            obraz: "Pictures/cwiczenie-klata5.jpg",
            miesnie: {
                glowne: [
                    "m. piersiowy większy",
                    "m. trójgłowy ramienia",
                    "m. naramienny przedni"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Połóż się na ławce ze skosem ujemnym.",
                "Chwyć sztangę nachwytem (palce wskazują przód, kciuki skierowane do środka) na taką szerokość, by w połowie wykonywania ruchu kąt między ramieniem a przedramieniem wynosił 90 stopni.",
                "Łopatki mocno ściągnięte, mięśnie brzucha i pośladków napięte."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i powolnym ruchem opuść sztangę w okolicę dolnej części klatki piersiowej.",
                "Po przytrzymaniu sztangi przez ułamek sekundy zacznij unosić sztangę z powrotem do pozycji wyjściowej, wydychając powietrze w końcowej fazie ruchu.",
                "W momencie wyprostowania ramion ze sztangą (unikaj przeprostu w łokciach), mocno dopnij mięsień piersiowy, po czym ponownie zacznij opuszczać sztangę.",
                "Wykonaj ruch zadaną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Wyciskanie na suwnicy Smitha leżąc na ławce płaskiej",
            obraz: "Pictures/cwiczenie-klata6.jpg",
            miesnie: {
                glowne: [
                    "m. piersiowy większy, część środkowa",
                    "m. trójgłowy ramienia",
                    "m. naramienny przedni"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Połóż się na ławce płaskiej.",
                "Chwyć sztangę nachwytem (palce wskazują przód, kciuki skierowane do środka) na taką szerokość, aby w połowie wykonywania ruchu kąt między ramieniem a przedramieniem wynosił 90 stopni.",
                "Pośladki oraz plecy mocno dociśnij do ławeczki. Ściągnij łopatki."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, weź wdech i powolnym ruchem opuść sztangę w okolicę środkowej części klatki piersiowej.",
                "Zatrzymaj ruch na ułamek sekundy, następnie zacznij unosić sztangę z powrotem do pozycji wyjściowej, wykonując w końcowej fazie ruchu wydech. Skup się, by wyciskanie następowało z mięśnia piersiowego.",
                "Kiedy ramiona będą proste (unikaj przeprostu w łokciach), mocno dopnij mięsień piersiowy, po czym ponownie zacznij opuszczać sztangę wraz z wdechem.",
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