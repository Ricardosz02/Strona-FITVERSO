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
            nazwa: "Uginanie ramion z hantlami w oparciu o ławeczkę",
            obraz: "Pictures/cwiczenie-biceps1.jpg",
            miesnie: {
                glowne: [
                    "m. dwugłowe ramion",
                    "m. ramienne"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Oprzyj klatkę piersiową o ławkę, kąt 45–60 stopni.",
                "Ramiona powinny znajdować się prostopadle do podłoża, dłonie trzymają hantle."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i rozpocznij uginanie ramion.",
                "Ruch prowadź aż do maksymalnego spięcia, nie cofaj łokci.",
                "W górnej fazie zatrzymaj ruch na pół sekundy, a następnie spokojnym tempem wraz z wydechem opuść ramiona do pełnego rozciągnięcia."
            ]
        },
        {
            nazwa: "Uginanie ramienia z linką wyciągu dolnego stojąc",
            obraz: "Pictures/cwiczenie-biceps2.jpg",
            miesnie: {
                glowne: [
                    "m. dwugłowe ramienia",
                    "m. ramienne"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca, tyłem do wyciągu dolnego, około pół metra od wyciągu.",
                "Brzuch i pośladki mocno napięte, ciało wyprostowane.",
                "Uchwyt linki wyciągu dolnego trzymany w jednej dłoni, ramię lekko cofnięte."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, weź wdech i wykonaj dokładne, płynne zgięcie ramienia w pełnym zakresie ruchu aż do momentu, w którym przedramię dotknie bicepsa, a łokieć lekko się uniesie.",
                "Przytrzymaj maksymalnie napięty biceps przez ułamek sekundy.",
                "Następnie wraz z wydechem powolnym ruchem opuść przedramię."
            ]
        },
        {
            nazwa: "Uginanie ramion z hantlami z rotacją",
            obraz: "Pictures/cwiczenie-biceps3.jpg",
            miesnie: {
                glowne: [
                    "m. dwugłowy ramienia",
                    "m. ramienny",
                    "m. ramienno-promieniowy"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca.",
                "Ramiona ułożone wzdłuż ciała, brzuch i pośladki napięte.",
                "Hantle w dłoniach w pozycji neutralnej – kciuki skierowane w przód."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wykonaj wdech.",
                "Rozpocznij uginanie z jednoczesną rotacją zewnętrzną (supinacją), aby finalnie dłoń była skierowana kciukiem na zewnątrz.",
                "Zatrzymaj ruch na ułamek sekundy w pozycji końcowej.",
                "Z wydechem wykonaj ruch opuszczania znacznie wolniej niż podnoszenia, wracając do neutralnej pozycji ramion."
            ]
        },
        {
            nazwa: "Zginanie przedramion w wąskim chwycie ze sztangą stojąc",
            obraz: "Pictures/cwiczenie-biceps4.jpg",
            miesnie: {
                glowne: [
                    "m. dwugłowy ramienia",
                    "m. ramienny"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca, plecy proste, sztanga trzymana wąsko podchwytem.",
                "Stopy na szerokość barków.",
                "Pełne ustabilizowanie łokci, które znajdują się możliwie jak najbliżej tułowia."
            ],
            ruch: [
                "Weź wdech. Utrzymując prawidłową pozycję wyjściową, wykonaj mocne ugięcie ramion w łokciach do momentu szczytowego napięcia bicepsa, sztanga powinna znajdować się na wysokości barków. Utrzymaj stałe napięcie mięśni.",
                "Utrzymaj maksymalnie napięty biceps przez ułamek sekundy, w szczytowym momencie ruchu wykonaj wydech, a następnie powolnym ruchem opuść przedramiona.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Zginanie przedramion ze sztangą stojąc",
            obraz: "Pictures/cwiczenie-biceps5.jpg",
            miesnie: {
                glowne: [
                    "m. dwugłowy ramienia",
                    "m. ramienny"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca, plecy proste, sztanga trzymana podchwytem.",
                "Pełne ustabilizowanie łokci, które znajdują się możliwie jak najbliżej tułowia.",
                "Dłonie rozstawione na szerokość nieco większą niż rozstaw barków."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową i przytrzymując ramiona nieruchomo, wykonaj ugięcie ramion w łokciach ze sztangą do momentu szczytowego napięcia bicepsa, w którym sztanga powinna znajdować się na wysokości barków. Utrzymuj stałe napięcie mięśni.",
                "Przytrzymaj maksymalnie napięty biceps przez ułamek sekundy, w szczytowym momencie ruchu wykonaj wydech, a następnie powolnym ruchem opuść przedramiona.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Zginanie przedramion z gryfem łamanym na modlitewniku",
            obraz: "Pictures/cwiczenie-biceps6.jpg",
            miesnie: {
                glowne: [
                    "m. dwugłowy ramienia",
                    "m. ramienny"
                ],
                pomocnicze: []
            },
            pozycja_wyjsciowa: [
                "Pozycja siedząca na modlitewniku, łokcie rozstawione na szerokość barków wspierają się o oparcie, ramiona równolegle do siebie, plecy wyprostowane.",
                "Pełne ustabilizowanie łokci.",
                "Gryf trzymany podchwytem.",
                "Nogi rozstawione w sposób pozwalający zachować stabilną pozycję."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, weź głęboki wdech i wykonaj mocne zgięcie przedramion w pełnym zakresie ruchu. Staraj się nie przekraczać przedramionami pionowej linii, odciążając biceps.",
                "Utrzymaj maksymalnie napięty biceps przez ułamek sekundy w szczytowym momencie ruchu, następuje zrób wydech i powolnym ruchem opuść przedramiona.",
                "Nie wykonuj przeprostu łokci.",
                "Wykonaj zadaną liczbę powtórzeń."
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
