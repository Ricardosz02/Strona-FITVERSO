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
            nazwa: "Wiosłowanie sztangą trzymaną nachwytem do klatki w opadzie tułowia",
            obraz: "Pictures/cwiczenie-plecy1.jpg",
            miesnie: {
                glowne: [
                    "m. najszerszy grzbietu",
                    "m. naramienny tylny",
                    "m. czworoboczny",
                    "m. dwugłowy ramienia"
                ],
            },
            pozycja_wyjsciowa: [
                "Trzymając sztangę nachwytem (palce skierowane w dół), nieco szerzej niż na szerokość barków, ugnij lekko nogi w kolanach i wykonaj opad tułowia w przód.",
                "Ramiona wyprostowane, ustawione prostopadle do podłoża."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję ciała, wykonaj wdech, a następnie przyciągnij sztangę pionowo w górę, kieruj ją w stronę mostka, jednocześnie maksymalnie zbliżając łopatki do kręgosłupa.",
                "Zatrzymaj ruch na ułamek sekundy w momencie, kiedy sztanga znajduje się blisko tułowia.",
                "Wykonując wydech powietrza, powoli obniż sztangę do pozycji wyjściowej.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Ściąganie drążka wyciągu górnego do klatki nachwytem szeroko",
            obraz: "Pictures/cwiczenie-plecy2.jpg",
            miesnie: {
                glowne: [
                    "m. najszerszy grzbietu",
                    "m. czworoboczny",
                    "m. równoległoboczny",
                    "m. dwugłowy ramienia"
                ],
            },
            pozycja_wyjsciowa: [
                "Pozycja siedząca, przodem do wyciągu. Kolana zablokowane o wałki.",
                "Drążek trzymany znacznie szerzej niż szerokość barków. Ramiona wyprostowane w górze."
            ],
            ruch: [
                "Weź wdech. Odchyl się nieznacznie do tyłu i wypinając klatkę piersiową, zainicjuj ruch poprzez ściągnięcie łopatek w dół i do siebie, przyciągnij drążek w stronę górnej części klatki piersiowej, opuszczając łokcie wzdłuż tułowia w kierunku bioder.",
                "W momencie największego napięcia zatrzymaj ruch na ułamek sekundy.",
                "Rozpocznij opuszczanie ciężaru wraz z płynnym wydechem.",
                "Wykonaj zadaną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Wiosłowanie hantlami w oparciu o ławkę skośną",
            obraz: "Pictures/cwiczenie-plecy3.jpg",
            miesnie: {
                glowne: [
                    "m. najszerszy grzbietu",
                    "m. obły większy",
                    "m. naramienny tylny",
                    "m. czworoboczny",
                    "m. dwugłowy ramienia"
                ],
            },
            pozycja_wyjsciowa: [
                "Sztangielki trzymane chwytem neutralnym (palce skierowane do tułowia). Klatka piersiowa oparta o ławeczkę skośną dodatnią (kąt 45-60 stopni).",
                "Stopy pozostają zaparte o ziemię.",
                "Głowa w jednej linii z plecami, ramiona wyprostowane, prostopadle do podłoża."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję ciała, wykonaj wdech, a następnie przyciągnij sztangielki pionowo w górę, kieruj je w stronę bioder, jednocześnie maksymalnie zbliżając łopatki do kręgosłupa i w dół.",
                "Kontynuuj ruch do momentu, w którym sztangielki będą znajdować się na wysokości bioder.",
                "Utrzymaj napięcie przez ułamek sekundy.",
                "Ruch opuszczania wykonaj zdecydowanie wolniej niż podnoszenia, zrób wydech."
            ]
        },
        {
            nazwa: "Ściąganie chwytem neutralnym z wyciągu górnego",
            obraz: "Pictures/cwiczenie-plecy4.jpg",
            miesnie: {
                glowne: [
                    "m. najszerszy grzbietu",
                    "m. czworoboczny",
                    "m. równoległoboczny",
                    "m. dwugłowy ramienia"
                ],
            },
            pozycja_wyjsciowa: [
                "Pozycja siedząca, przodem do wyciągu. Kolana zablokowane o wałki.",
                "Drążek trzymany chwytem neutralnym. Ramiona wyprostowane w górze."
            ],
            ruch: [
                "Weź wdech, odchyl się nieznacznie, ruch przyciągania drążka rozpocznij od maksymalnego opuszczenia barków oraz ściągnięcia łopatek do siebie.",
                "Intencją ruchu jest przyciągnięcie łokci do bioder, ściąganie kontynuuj, aż drążek znajdzie się w okolicy górnej części klatki piersiowej.",
                "Zatrzymaj ruch na ułamek sekundy, a następnie wraz z wydechem spokojnym ruchem rozpocznij opuszczanie ciężaru do maksymalnego rozciągnięcia."
            ]
        },
        {
            nazwa: "Szrugsy z hantlami",
            obraz: "Pictures/cwiczenie-plecy5.jpg",
            miesnie: {
                glowne: [
                    "m. czworoboczny część zstępująca (kaptur)"
                ],
            },
            pozycja_wyjsciowa: [
                "Pozycja stojąca, ramiona wyprostowane (lekko odblokowane w łokciu), ustawione wzdłuż tułowia, w dłoniach hantle."
            ],
            ruch: [
                "Utrzymując prawidłową pozycję wyjściową, wykonaj wdech i unieś barki w górę.",
                "Ruch jest bardzo krótki, zatrzymaj na ułamek sekundy barki w górze, następnie wypuść powietrze i powoli opuść barki.",
                "Wykonaj wyznaczoną liczbę powtórzeń."
            ]
        },
        {
            nazwa: "Przyciąganie linki wyciągu dolnego jednorącz",
            obraz: "Pictures/cwiczenie-plecy6.jpg",
            miesnie: {
                glowne: [
                    "m. najszerszy grzbietu",
                    "m. czworoboczny",
                    "m. równoległoboczny",
                    "m. dwugłowy ramienia"
                ],
            },
            pozycja_wyjsciowa: [
                "Pozycja siedząca w rozkroku, naprzeciw wyciągu dolnego, z założonym wcześniej pojedynczym uchwytem.",
                "Chwyt jednorącz za uchwyt. Ramię wyprostowane, wyciągnięte w przód.",
                "Druga ręka oparta na podłodze lub na kolanie.",
                "Plecy proste, ustawione niemal prostopadle do podłoża."
            ],
            ruch: [
                "Weź wdech i zainicjuj ruch, ściągając łopatkę w dół i do kręgosłupa. Przyciągając uchwyt w stronę biodra, wykonaj lekką rotację w nadgarstku.",
                "Ramię prowadź blisko tułowia.",
                "Zatrzymaj ruch na ułamek sekundy. Następnie powoli wróć do pozycji wyjściowej, wykonując wydech."
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
